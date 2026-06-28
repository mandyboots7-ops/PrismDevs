import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  if (err.stack) {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    error: {
      message,
      status: statusCode,
    },
  });
};
