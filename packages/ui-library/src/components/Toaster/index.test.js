// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useContext, useEffect } from 'react'
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  act,
} from '@testing-library/react'

import TestThemeProvider from '../../themes/TestThemeProvider'
import { ToasterProvider, ToasterContext, Toast } from './index'

const reactRoot = document.createElement('div')
reactRoot.setAttribute('id', 'root')

beforeEach(() => {
  document.body.appendChild(reactRoot)
  jest.useFakeTimers()
})

afterEach(() => {
  // https://testing-library.com/docs/using-fake-timers
  act(() => {
    jest.runOnlyPendingTimers()
  })
  jest.useRealTimers()
})

test('It should create the #toaster-root container', () => {
  render(
    <TestThemeProvider>
      <ToasterProvider />
    </TestThemeProvider>,
  )

  const toasterRoot = document.querySelector('#toaster-root')
  expect(toasterRoot).toBeTruthy()
})

test('showToast() creates a toast', () => {
  // Note this is basically the same implementation as <Toast />
  function DeeperDown() {
    const { showToast } = useContext(ToasterContext)

    useEffect(() => {
      showToast({
        title: 'toast title',
        body: 'toast body',
        variant: 'success',
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null
  }

  const { getByText, getByRole } = render(
    <TestThemeProvider>
      <ToasterProvider>
        <DeeperDown />
      </ToasterProvider>
    </TestThemeProvider>,
  )

  expect(getByRole('alert')).toBeInTheDocument()
  expect(getByText('toast title')).toBeInTheDocument()
  expect(getByText('toast body')).toBeInTheDocument()
})

test('Toaster can be delayed', async () => {
  const { queryByRole, getByRole } = render(
    <TestThemeProvider>
      <ToasterProvider>
        <Toast body="toast body" delay={250} />
      </ToasterProvider>
    </TestThemeProvider>,
  )

  expect(queryByRole('alert')).not.toBeInTheDocument()

  act(() => {
    jest.advanceTimersByTime(250)
  })

  expect(getByRole('alert')).toBeInTheDocument()
})

test('<Toast /> creates a toast', () => {
  const { getByText } = render(
    <TestThemeProvider>
      <ToasterProvider>
        <Toast title="toast title" />
      </ToasterProvider>
    </TestThemeProvider>,
  )

  expect(getByText('toast title')).toBeInTheDocument()
})

test('Toast disappears when clicking X', async () => {
  const { getByRole, queryByRole } = render(
    <TestThemeProvider>
      <ToasterProvider>
        <Toast title="toast title" />
      </ToasterProvider>
    </TestThemeProvider>,
  )

  fireEvent.click(getByRole('button'))

  await waitForElementToBeRemoved(() => queryByRole('alert'))

  expect(queryByRole('alert')).not.toBeInTheDocument()
})

test('Toast disappears automatically after some time', async () => {
  const { getByRole, queryByRole } = render(
    <TestThemeProvider>
      <ToasterProvider>
        <Toast title="toast title" />
      </ToasterProvider>
    </TestThemeProvider>,
  )

  expect(getByRole('alert')).toBeInTheDocument()

  act(() => {
    jest.runAllTimers()
  })

  expect(queryByRole('alert')).not.toBeInTheDocument()
})
