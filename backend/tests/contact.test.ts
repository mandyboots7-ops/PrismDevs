import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';
import * as db from '../src/config/db.js';

// Mock the dbQuery function
vi.mock('../src/config/db.js', () => ({
  dbQuery: vi.fn(() => ({}))
}));

describe('Contact Form API', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('POST /api/contact should create a new message with valid data', async () => {
    const contactData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, I would like to build a SaaS.',
      projectType: 'SaaS build'
    };

    const res = await request(app)
      .post('/api/contact')
      .send(contactData);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('id');
    expect(db.dbQuery).toHaveBeenCalled();
    
    // Verify the SQL call (basic check)
    const sqlCall = vi.mocked(db.dbQuery).mock.calls[0][0];
    expect(sqlCall).toContain('INSERT INTO contact_messages');
    expect(sqlCall).toContain('John Doe');
    expect(sqlCall).toContain('john@example.com');
    expect(sqlCall).toContain('SaaS build');
  });

  it('POST /api/contact should handle missing projectType', async () => {
    const contactData = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'Just checking in.'
    };

    const res = await request(app)
      .post('/api/contact')
      .send(contactData);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(db.dbQuery).toHaveBeenCalled();
    
    const sqlCall = vi.mocked(db.dbQuery).mock.calls[0][0];
    expect(sqlCall).toContain('NULL');
  });

  it('POST /api/contact should return 400 if name is missing', async () => {
    const contactData = {
      email: 'john@example.com',
      message: 'Hello'
    };

    const res = await request(app)
      .post('/api/contact')
      .send(contactData);

    expect(res.status).toBe(400);
    expect(res.body.error.message).toContain('Name and email are required');
    expect(db.dbQuery).not.toHaveBeenCalled();
  });

  it('POST /api/contact should return 400 if email is missing', async () => {
    const contactData = {
      name: 'John Doe',
      message: 'Hello'
    };

    const res = await request(app)
      .post('/api/contact')
      .send(contactData);

    expect(res.status).toBe(400);
    expect(res.body.error.message).toContain('Name and email are required');
  });

  it('POST /api/contact should return 400 if email format is invalid', async () => {
    const contactData = {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'Hello'
    };

    const res = await request(app)
      .post('/api/contact')
      .send(contactData);

    expect(res.status).toBe(400);
    expect(res.body.error.message).toContain('Invalid email format');
  });
  
  it('POST /api/contact should return 400 if message is missing', async () => {
    const contactData = {
      name: 'John Doe',
      email: 'john@example.com'
    };

    const res = await request(app)
      .post('/api/contact')
      .send(contactData);

    expect(res.status).toBe(400);
    expect(res.body.error.message).toContain('Message is required');
  });
});
