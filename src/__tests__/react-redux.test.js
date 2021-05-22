import {render as rtlRender, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {Provider } from 'react-redux'
import {createStore} from 'redux'

import { reducer, initialReducerState, ConnectedCounter} from '../react-redux';


// Now here's what your test will look like:
// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with


const render = (
    ui,
    {
      initialState = initialReducerState,
      store = createStore(reducer, initialState),
      ...renderOptions
    } = {},
  ) => {
    const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
  }

  test('can render with redux with defaults', () => {
    render(<ConnectedCounter />)

    userEvent.click(screen.getByText('+'))

    expect(screen.getByTestId('count-value')).toHaveTextContent('1')
  })

  test('can render with redux with custom initial state', () => {
    render(<ConnectedCounter />, {initialState: {count: 3}})

    userEvent.click(screen.getByText('-'))

    expect(screen.getByTestId('count-value')).toHaveTextContent('2')
  })

  test('can render with redux with custom store', () => {
    // this is a silly store that can never be changed
    const store = createStore(() => ({count: 1000}))
    render(<ConnectedCounter />, {store})

    userEvent.click(screen.getByText('+'))
    expect(screen.getByTestId('count-value')).toHaveTextContent('1000')

    userEvent.click(screen.getByText('-'))
    expect(screen.getByTestId('count-value')).toHaveTextContent('1000')
  })
