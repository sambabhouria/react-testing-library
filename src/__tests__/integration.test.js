import React from 'react'
import {mount, render, shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import FruitAutocomplete from '../fruit-autocomplete'


configure({adapter: new Adapter()});

// some handy utilities
// learn more about this `sel` function
// from my other blog post: http://kcd.im/sel-util
const sel = id => `[data-test="${id}"]`
const hasMenu = wrapper => wrapper.find(sel('menu')).length === 1

test('menu is closed by default', () => {
  const wrapper = shallow(<FruitAutocomplete />)
  expect(hasMenu(wrapper)).toBe(false)
})

test('lists fruit with a keydown of ArrowDown on the input', () => {
  const wrapper = shallow(<FruitAutocomplete />)
  const input = wrapper.find('input')

//   input.simulate('keydown', {key: 'ArrowDown'})
//   expect(hasMenu(wrapper)).toBe(true)
})

test('can search for and select "banana"', () => {
  const onChange = jest.fn()
  const wrapper = shallow(<FruitAutocomplete onChange={onChange} />)
  const input = wrapper.find('input')
//   input.simulate('change', {target: {value: 'banana'}})
//   input.simulate('keydown', {key: 'ArrowDown'})
//   input.simulate('keydown', {key: 'Enter'})
//   expect(onChange).toHaveBeenCalledTimes(1)
//   const downshift = expect.any(Object)
//   expect(onChange).toHaveBeenCalledWith('banana', downshift)
//   expect(input.instance().value).toBe('banana')
})
