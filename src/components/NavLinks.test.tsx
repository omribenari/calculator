import React from 'react';
import { render, screen } from '@testing-library/react';
import NavLinks from './NavLinks';
import { MemoryRouter } from 'react-router-dom';

describe('NavLinks component', () => {
  test('renders Calculator and History links', () => {
    render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>
    );

    const calculatorLink = screen.getByRole('link', { name: /Calculator/i });
    const historyLink = screen.getByRole('link', { name: /History/i });

    expect(calculatorLink).toBeInTheDocument();
    expect(historyLink).toBeInTheDocument();
  });

  test('links have correct href attributes', () => {
    render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>
    );

    const calculatorLink = screen.getByRole('link', { name: /Calculator/i });
    const historyLink = screen.getByRole('link', { name: /History/i });

    expect(calculatorLink).toHaveAttribute('href', '/');
    expect(historyLink).toHaveAttribute('href', '/history');
  });
});
