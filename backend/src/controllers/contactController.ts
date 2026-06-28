import { Request, Response, NextFunction } from 'express';
import { dbQuery } from '../config/db.js';
import { randomUUID } from 'crypto';

/**
 * Handles contact form submissions.
 * POST /api/contact
 */
export const createContactMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, message, projectType } = req.body;

    // Validation: name and email are required
    if (!name || !email) {
      res.status(400).json({
        error: {
          message: 'Name and email are required',
          status: 400
        }
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        error: {
          message: 'Invalid email format',
          status: 400
        }
      });
      return;
    }

    // Message is also required according to typical contact form expectations
    if (!message) {
       res.status(400).json({
        error: {
          message: 'Message is required',
          status: 400
        }
      });
      return;
    }

    const id = randomUUID();
    const createdAt = new Date().toISOString();

    // Escape single quotes for SQL
    const escape = (str: string) => str.replace(/'/g, "''");

    const projectTypeValue = projectType ? `'${escape(projectType)}'` : 'NULL';
    
    // Construct SQL statement on one line to avoid issues with the CLI wrapper
    const sql = `INSERT INTO contact_messages (id, name, email, message, project_type, created_at) VALUES ('${id}', '${escape(name)}', '${escape(email)}', '${escape(message)}', ${projectTypeValue}, '${createdAt}')`;

    dbQuery(sql);

    res.status(201).json({
      success: true,
      data: {
        id,
        message: 'Contact message received successfully'
      }
    });
  } catch (error) {
    next(error);
  }
};
