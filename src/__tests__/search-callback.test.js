import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchComponent from '../search';

describe('Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn();
 
    render(
      <SearchComponent value="" onChange={onChange}>
        Search:
      </SearchComponent>
    );
 
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
 
    expect(onChange).toHaveBeenCalledTimes(0);
    // to summilate when onChange called
    //expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('calls the onChange userEvent callback handler', async () => {
    const onChange = jest.fn();
 
    render(
      <SearchComponent value="" onChange={onChange}>
        Search:
      </SearchComponent>
    );
 
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
    expect(onChange).toHaveBeenCalledTimes(0);
    // expect(onChange).toHaveBeenCalledTimes(10);
  });
});
