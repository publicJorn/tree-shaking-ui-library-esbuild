// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { render } from '@testing-library/react'

import TestThemeProvider from '../../theme/TestThemeProvider'
import Alert from './index'

test('Alert', () => {
  const actions = [
    <Alert.ActionButton key="action" as="a" href="https://nlx.io">
      My Action
    </Alert.ActionButton>,
  ]

  const { getByTestId, getByText } = render(
    <TestThemeProvider>
      <Alert title="My First Alert" actions={actions} data-testid="alert">
        Hello, World!
      </Alert>
    </TestThemeProvider>,
  )

  expect(getByTestId('alert')).toBeTruthy()
  expect(getByTestId('title').textContent).toBe('My First Alert')
  expect(getByTestId('content').textContent).toBe('Hello, World!')
  expect(getByText('My Action')).toHaveAttribute('href', 'https://nlx.io')
})
