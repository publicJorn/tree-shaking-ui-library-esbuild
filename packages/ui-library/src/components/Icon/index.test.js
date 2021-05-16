// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { render } from '@testing-library/react'

import TestThemeProvider from '../../themes/TestThemeProvider'
import Icon from './index'

test('renders without crashing', () => {
  expect(() => {
    render(
      <TestThemeProvider>
        <Icon />
      </TestThemeProvider>,
    )
  }).not.toThrow()
})
