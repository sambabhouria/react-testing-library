import {render, screen, getByLabelText} from '@testing-library/react'
import { Login } from '../login'

test('should show login form', () => {
  render(<Login />)

  const input = screen.getByLabelText('Username')
  // With screen:
  const inputNode1 = screen.getByLabelText('Username')

  // Without screen, you need to provide a container:
  const container = document.querySelector('#app')
  const inputNode2 = getByLabelText(container, 'Username')
  // Events and assertions...


})
