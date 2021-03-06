import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import User from '../user';

describe('App', () => {
  test('renders User component', async () => {
    render(<User />);

    //  screen.debug();
    expect(screen.queryByText(/Signed in as/)).toBeNull();

    //  screen.debug();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });

  test('renders FIRE EVENT', async () => {
    render(<User />);

    // wait for the user to resolve
    // needs only be used in our special case
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });


  test('renders User User Event', async () => {
    render(<User />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
  });


});
