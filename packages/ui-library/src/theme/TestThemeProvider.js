// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './default'

// eslint-disable-next-line react/prop-types
const TestThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default TestThemeProvider
