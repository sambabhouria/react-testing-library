import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchComponent from '../search';

describe('SearchComponent', () => {
  test('renders SearchComponent component', () => {
    render(<SearchComponent />);

    expect(screen.getByText('Search:')).toBeInTheDocument();
  });

  test('renders SearchComponent', () => {
    render(<SearchComponent />);

    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Search:');

    // explicit assertion
    // recommended
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });

  test('renders App component', () => {
    render(<SearchComponent />);

    // fails
    // expect(screen.getByText('Search')).toBeInTheDocument();
    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument();

  });
});
