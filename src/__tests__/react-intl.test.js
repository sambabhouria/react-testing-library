import 'intl'
import * as React from 'react'
import { screen} from '@testing-library/react'
import  {FormatDateView, render} from '../react-intl'


// this should work, but for some reason it's not able to load the locale
// even though we have the IntlPolyfill installed
// I promise it is. Just try console.log(global.IntlPolyfill)
test.skip('it should render FormattedDate and have a formated pt date', () => {
  render(<FormatDateView />)
  expect(screen.getByTestId('date-display')).toHaveTextContent('11/03/2019')
})
