import { describe, it, expect } from 'vitest';
import { errorHandler } from '../src/middleware/errorHandler.js';

describe('errorHandler', () => {
  it('handles an error with status and message', () => {
    // Mock Express objects
    const err = { status: 400, message: 'Bad request' };
    const req = {} as any;
    const res: any = {
      statusCode: 0,
      body: null,
      status(code: number) {
        this.statusCode = code;
        return this;
      },
      json(data: any) {
        this.body = data;
        return this;
      },
    };
    const next = () => {};

    errorHandler(err, req, res, next);

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      error: { message: 'Bad request', status: 400 },
    });
  });

  it('defaults to 500 for errors without status', () => {
    const err = { message: 'Something broke' };
    const req = {} as any;
    const res: any = {
      statusCode: 0,
      body: null,
      status(code: number) {
        this.statusCode = code;
        return this;
      },
      json(data: any) {
        this.body = data;
        return this;
      },
    };
    const next = () => {};

    errorHandler(err, req, res, next);

    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({
      error: { message: 'Something broke', status: 500 },
    });
  });

  it('provides default message when none given', () => {
    const err = {};
    const req = {} as any;
    const res: any = {
      statusCode: 0,
      body: null,
      status(code: number) {
        this.statusCode = code;
        return this;
      },
      json(data: any) {
        this.body = data;
        return this;
      },
    };
    const next = () => {};

    errorHandler(err, req, res, next);

    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({
      error: { message: 'Internal Server Error', status: 500 },
    });
  });
});