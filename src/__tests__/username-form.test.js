import user from '@testing-library/user-event'
import {render, screen, act } from '@testing-library/react'

import  {UsernameForm} from '../username-form'


/**
 * How to fix the act(...) warning
 * So, let's first thank the React team for letting us know that we didn't test everything that's happening in our component (thanks React team! 🙏)
 * and then let's add an assertion to our test to cover the use case we forgot the first time around:
 */

test('calls updateUsername with the new username', async () => {
  const handleUpdateUsername = jest.fn()
  const fakeUsername = 'sonicthehedgehog'

  render(<UsernameForm updateUsername={handleUpdateUsername} />)

  const usernameInput = screen.getByLabelText(/username/i)

  await user.type(usernameInput, fakeUsername)

  user.click(screen.getByText(/submit/i))

  expect(handleUpdateUsername).toHaveBeenCalledWith(fakeUsername)

//   await waitForElementToBeRemoved(() => screen.getByText(/saving/i))
})

test('An Alternative: waiting for the mocked promise', async () => {
    const promise = Promise.resolve()
    const handleUpdateUsername = jest.fn(() => promise)
    const fakeUsername = 'sonicthehedgehog'
    render(<UsernameForm updateUsername={handleUpdateUsername} />)
    const usernameInput = screen.getByLabelText(/username/i)
    await user.type(usernameInput, fakeUsername)
    user.click(screen.getByText(/submit/i))
    expect(handleUpdateUsername).toHaveBeenCalledWith(fakeUsername)
    await act(() => promise)
  })
