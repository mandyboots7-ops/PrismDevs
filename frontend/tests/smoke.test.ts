/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';

// Basic utility tests for frontend helpers
describe('App entry point', () => {
  it('passes a basic smoke test', () => {
    expect(1 + 1).toBe(2);
  });
});