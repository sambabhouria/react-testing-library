// example.test.js

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import UseReducerComponent from '../use-reducer'

it('shows success message after confirm button is clicked', () => {
  const { getByText } = render(<UseReducerComponent />)

  expect(getByText(/waiting/i)).toBeInTheDocument()

  fireEvent.click(getByText('Confirm'))

  expect(getByText('Confirmed!')).toBeInTheDocument()
})
