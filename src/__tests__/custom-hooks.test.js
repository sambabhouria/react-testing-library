
import {renderHook, act} from '@testing-library/react-hooks'

import useCount from '../custom-hooks'


/*
When we call the increment and decrement functions from our hook,
that triggers a state update and because we're not in the React callstack we're going to get
 an act(...) warning. So, let's wrap that in act(...)!
*/

// test('increment and decrement updates the count', () => {
//   const {result} = renderHook(() => useCount())
//   expect(result.current.count).toBe(0)
//   result.current.increment()
//   expect(result.current.count).toBe(1)
//   result.current.decrement()
//   expect(result.current.count).toBe(0)
// })

test('increment and decrement updates the count', () => {
  const {result} = renderHook(() => useCount())
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})
