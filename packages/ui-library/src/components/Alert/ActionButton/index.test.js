// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//

import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import { MemoryRouter, Link } from 'react-router-dom'

import TestThemeProvider from '../../../theme/TestThemeProvider'
import ActionButton from './index'

test('LinkAction for React Router links', () => {
  const { getByText } = render(
    <TestThemeProvider>
      <MemoryRouter>
        <ActionButton as={Link} to="/home">
          React Router Action
        </ActionButton>
      </MemoryRouter>
    </TestThemeProvider>,
  )

  const buttonElement = getByText('React Router Action')
  expect(buttonElement).toBeTruthy()
  expect(buttonElement).toHaveAttribute('href', '/home')
})

test('AnchorAction', () => {
  const { getByText } = render(
    <TestThemeProvider>
      <ActionButton as="a" href="https://duck.com">
        Anchor Action
      </ActionButton>
      ,
    </TestThemeProvider>,
  )

  const buttonElement = getByText('Anchor Action')
  expect(buttonElement).toBeTruthy()
  expect(buttonElement).toHaveAttribute('href', 'https://duck.com')
})

test('ButtonAction', async () => {
  const onClickSpy = jest.fn()
  const { getByText } = render(
    <TestThemeProvider>
      <ActionButton onClick={onClickSpy}>onClick Action</ActionButton>
    </TestThemeProvider>,
  )

  const buttonElement = getByText('onClick Action')
  expect(buttonElement).toBeTruthy()

  await act(async () => {
    await fireEvent.click(buttonElement)
  })

  expect(onClickSpy).toHaveBeenCalledTimes(1)
})
