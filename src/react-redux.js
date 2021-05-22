import {render as rtlRender, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'

// counter.js
const Counter = ({dispatch, count}) => {
  const increment = () => {
    dispatch({type: 'INCREMENT'})
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'})
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span data-testid="count-value">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

// normally this would be:
// export default connect((state) => ({count: state.count}))(Counter)
// but for this test we'll give it a variable name
// because we're doing this all in one file

export const ConnectedCounter = connect((state) => ({count: state.count}))(Counter)

// export default connect((state) => ({count: state.count}))(Counter)

// app.js
export const initialReducerState = {
  count: 0,
}

export const reducer = (state = initialReducerState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
}

// normally here you'd do:
// const store = createStore(reducer)
// ReactDOM.render(
//   <Provider store={store}>
//     <Counter />
//   </Provider>,
//   document.getElementById('root'),
// )
// but for this test we'll umm... not do that :)
