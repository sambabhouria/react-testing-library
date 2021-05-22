import * as React from 'react'
import {withRouter} from 'react-router'
import {render as rtlRender, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'

import ReactRouter from '../react-router';

// pretend this is in another file, and we:
// import {LocationDisplay} from './location-display'
const LocationDisplay = withRouter(({location}) => (
  <div data-testid="location-display">{location.pathname}</div>
))

// your tests should look like this below:

// Ok, so here's what your tests might look like

// this is a handy function that I would utilize for any component
// that relies on the router being in context
const render = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)

    return rtlRender(ui, {wrapper: Router})
  }

  test('full app rendering/navigating', () => {
    render(<ReactRouter />)
    expect(screen.getByText(/you are home/i)).toBeInTheDocument()

    userEvent.click(screen.getByText(/about/i))

    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
  })

  test('landing on a bad page', () => {
    render(<ReactRouter />, {route: '/something-that-does-not-match'})

    expect(screen.getByText(/no match/i)).toBeInTheDocument()
  })

  test('rendering a component that uses useLocation', () => {
    const route = '/some-route'
    render(<LocationDisplay />, {route})

    // avoid using test IDs when you can
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  })
