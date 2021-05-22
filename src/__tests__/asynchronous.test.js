import React from 'react';
import axios from 'axios';
//  import { render, screen } from '@testing-library/react';
import { render, screen, act } from '@testing-library/react'; // to use act
import userEvent from '@testing-library/user-event';

import Asynchronous from '../asynchronous';
 
jest.mock('axios');
 
describe('App', () => {
  // test('fetches stories from an API and displays them', async () => {
  //   const stories = [
  //     { objectID: '1', title: 'Hello' },
  //     { objectID: '2', title: 'React' },
  //   ];

  //  axios.get.mockImplementationOnce(() =>
  //     Promise.resolve({ data: { hits: stories } })
  //   );
  //   render(<Asynchronous />);

  //   await userEvent.click(screen.getByRole('button'));


  // //   await act(() =>  axios.get.mockImplementationOnce(() =>
  // //   Promise.resolve({ data: { hits: stories } })
  // // ));

  //   const items = await screen.findAllByRole('listitem');
  //   expect(items).toHaveLength(2);
  // });

  test('fetches stories from an API and displays them with act', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<Asynchronous />);

    await userEvent.click(screen.getByRole('button'));

     await act(() => promise);
    // await act( async () => promise);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });


  test('fetches stories from an API and fails', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error())
    );

    render(<Asynchronous />);

    await userEvent.click(screen.getByRole('button'));

    const message = await screen.findByText(/Something went wrong/);

    expect(message).toBeInTheDocument();
  });


});
