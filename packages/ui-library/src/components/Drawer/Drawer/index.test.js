// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import TestThemeProvider from '../../../theme/TestThemeProvider'
import Drawer from './index'

const ESCAPE_EVENT_KEY = 'Escape'

test('Drawer', () => {
  const closeHandler = jest.fn()

  const { getByText, getByLabelText } = render(
    <TestThemeProvider>
      <Drawer closeHandler={closeHandler}>
        <Drawer.Header title="Title" />
        <Drawer.Content>
          <p>Content for the drawer.</p>
        </Drawer.Content>
      </Drawer>
    </TestThemeProvider>,
  )

  expect(getByText('Content for the drawer.')).toBeInTheDocument()
  expect(getByLabelText('Close')).toBeInTheDocument()
})

test('Drawer should appear immediately given the `skipOpenAnimation` prop', () => {
  const closeHandler = jest.fn()

  const { getByTestId } = render(
    <TestThemeProvider>
      <Drawer skipOpenAnimation closeHandler={closeHandler}>
        <Drawer.Header title="Title" />
        <Drawer.Content>
          <p>Content for the drawer.</p>
        </Drawer.Content>
      </Drawer>
    </TestThemeProvider>,
  )

  expect(getByTestId('content')).toHaveClass('slide-in-appear')
})

describe('closing the drawer', () => {
  let utils
  let closeHandler

  beforeEach(() => {
    jest.useFakeTimers()
    closeHandler = jest.fn()

    utils = render(
      <TestThemeProvider>
        <Drawer closeHandler={closeHandler}>
          <Drawer.Header title="Drawer title" />
        </Drawer>
      </TestThemeProvider>,
    )
  })

  it('should close when clicking the close button', () => {
    fireEvent.click(utils.getByLabelText('Close'))
    jest.runAllTimers()
    expect(closeHandler).toHaveBeenCalled()
  })

  it('should close when clicking outside the drawer', () => {
    fireEvent.mouseDown(utils.container)
    jest.runAllTimers()
    expect(closeHandler).toHaveBeenCalled()
  })

  it('should close when pressing escape', () => {
    fireEvent.keyDown(global.document, {
      key: ESCAPE_EVENT_KEY,
      target: {
        // Escape evt target needs to be mocked
        hasAttribute: jest.fn(() => false),
        closest: jest.fn(() => false),
      },
    })

    jest.runAllTimers()
    expect(closeHandler).toHaveBeenCalled()
  })
})

describe('Drawer with noMask', () => {
  let utils
  let closeHandler

  beforeEach(() => {
    jest.useFakeTimers()
    closeHandler = jest.fn()

    utils = render(
      <TestThemeProvider>
        <Drawer noMask closeHandler={closeHandler}>
          <Drawer.Header title="Drawer title" />
        </Drawer>
      </TestThemeProvider>,
    )
  })

  it('should not close when clicking outside of the drawer', () => {
    fireEvent.mouseDown(utils.container)
    jest.runAllTimers()
    expect(closeHandler).not.toHaveBeenCalled()
  })

  it('should close when pressing escape', () => {
    fireEvent.keyDown(global.document, {
      key: ESCAPE_EVENT_KEY,
      target: {
        hasAttribute: jest.fn(() => false),
        closest: jest.fn(() => false),
      },
    })

    jest.runAllTimers()
    expect(closeHandler).toHaveBeenCalled()
  })
})
