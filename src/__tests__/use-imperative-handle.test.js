import  React from 'react'

import {render, screen, act} from '@testing-library/react'
import ImperativeCounter from '../use-imperative-handle'



/*

You'll get an act warning on those increment and decrement calls because they're happening outside the React callstack. So, let's wrap them in act:
*/

// test('can call imperative methods on counter component', () => {
//   const counterRef = React.createRef()
//   render(<ImperativeCounter ref={counterRef} />)
//   expect(screen.getByText('The count is: 0')).toBeInTheDocument()
//   counterRef.current.increment()
//   expect(screen.getByText('The count is: 1')).toBeInTheDocument()
//   counterRef.current.decrement()
//   expect(screen.getByText('The count is: 0')).toBeInTheDocument()
// })


test('can call imperative methods on counter component', () => {
    const counterRef = React.createRef()
    render(<ImperativeCounter ref={counterRef} />)
    expect(screen.getByText('The count is: 0')).toBeInTheDocument()
    act(() => counterRef.current.increment())
    expect(screen.getByText('The count is: 1')).toBeInTheDocument()
    act(() => counterRef.current.decrement())
    expect(screen.getByText('The count is: 0')).toBeInTheDocument()
  })
