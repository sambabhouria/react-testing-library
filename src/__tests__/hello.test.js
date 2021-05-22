import React from 'react';
import { render, screen } from '@testing-library/react';
 
import Hello from '../hello';
 
describe('Hello', () => {
  test('renders Hello component', () => {
    render(<Hello />);

    // screen.debug();
  });
});
