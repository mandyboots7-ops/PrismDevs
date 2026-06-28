import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Home from '../src/pages/Home';

describe('Layout component', () => {
  it('renders the navigation with Prism Devs branding', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Test child</div>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByText('Prism Devs')).toBeDefined();
    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('About')).toBeDefined();
  });

  it('renders children content', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Test child content</div>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByText('Test child content')).toBeDefined();
  });

  it('renders the footer with current year', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Content</div>
        </Layout>
      </MemoryRouter>
    );

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getAllByText(new RegExp(currentYear)).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Prism Devs/).length).toBe(2);
  });
});

describe('Home page', () => {
  it('renders the main heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('High-Quality Software')).toBeDefined();
    expect(screen.getByText(/Built for SaaS Founders/)).toBeDefined();
  });

  it('renders feature cards', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Rapid Delivery')).toBeDefined();
    expect(screen.getByText('Production Quality')).toBeDefined();
    expect(screen.getByText('End-to-End Build')).toBeDefined();
  });

  it('renders CTA buttons', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getAllByText('Get Started')[0]).toBeDefined();
    expect(screen.getByText('Learn More')).toBeDefined();
  });
});