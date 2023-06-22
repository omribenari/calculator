import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './Calculator';
import { MemoryRouter } from 'react-router-dom';

describe('Calculator component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
