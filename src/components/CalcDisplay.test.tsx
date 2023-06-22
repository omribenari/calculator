import React from 'react';
import { render, screen } from '@testing-library/react';
import CalcDisplay from './CalcDisplay';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { useStore } from '../store/useStore';

describe('CalcDisplay component', () => {
  beforeEach(() => {
    // Reset the store state after each test
    useStore.setState((state) => ({
      ...state,
      user: null,
      displayValue: '',
      isResult: false,
      log: [],
    }));
  });

  test('renders the displayValue correctly', () => {
    const value = '5';

    act(() => {
      useStore.getState().calcType(value);
    });

    render(
      <MemoryRouter>
        <CalcDisplay />
      </MemoryRouter>
    );

    const displayText = screen.getByText(value);

    expect(displayText).toBeInTheDocument();
  });

  test('has correct title attribute value', () => {
    const formula = '5+6*70%';

    act(() => {
      useStore.setState((state) => ({
        ...state,
        displayValue: formula,
      }));
    });

    render(
      <MemoryRouter>
        <CalcDisplay />
      </MemoryRouter>
    );

    const displayText = screen.getByText(formula);

    expect(displayText).toHaveAttribute('title', formula);
  });
});
