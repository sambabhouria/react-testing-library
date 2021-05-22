import 'intl'
import * as React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {IntlProvider, FormattedDate} from 'react-intl'

export const FormatDateView = () => {
  return (
    <div data-testid="date-display">
      <FormattedDate
        value="2019-03-11"
        timeZone="utc"
        day="2-digit"
        month="2-digit"
        year="numeric"
      />
    </div>
  )
}

export function render(ui, options) {
  function Wrapper({children}) {
    return <IntlProvider locale="pt">{children}</IntlProvider>
  }
  return {
    ...rtlRender(ui, {wrapper: Wrapper, ...options}),
  }
}
