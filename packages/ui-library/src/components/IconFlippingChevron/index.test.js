// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { render } from '@testing-library/react'

import TestThemeProvider from '../../theme/TestThemeProvider'
import IconFlippingChevron from './index'

test('renders without crashing', () => {
  expect(() => {
    render(
      <TestThemeProvider>
        <IconFlippingChevron />
      </TestThemeProvider>,
    )
  }).not.toThrow()
})
