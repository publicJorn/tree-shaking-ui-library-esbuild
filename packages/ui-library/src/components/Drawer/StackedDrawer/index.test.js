// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import TestThemeProvider from '../../../theme/TestThemeProvider'
import Drawer from '../Drawer'
import { withDrawerStack, useDrawerStack } from '../index'
import StackedDrawer from './index'

const ESCAPE_EVENT_KEY = 'Escape'

beforeEach(() => {
  jest.useFakeTimers()
})

test('show and hide a single StackedDrawer', () => {
  const afterHide = jest.fn()

  const StackOfDrawers = withDrawerStack(() => {
    const { showDrawer } = useDrawerStack()

    return (
      <TestThemeProvider>
        <button onClick={() => showDrawer('drawer1')}>show drawer1</button>

        <StackedDrawer id="drawer1" afterHide={afterHide}>
          <Drawer.Header title="Title" />
          <Drawer.Content>
            <p>Content for the drawer</p>
          </Drawer.Content>
        </StackedDrawer>
      </TestThemeProvider>
    )
  })

  const { getByText, getByLabelText, queryByText } = render(<StackOfDrawers />)

  fireEvent.click(getByText('show drawer1'))

  expect(getByText('Content for the drawer')).toBeInTheDocument()

  const closeButton = getByLabelText('Close')
  expect(closeButton).toBeInTheDocument()

  fireEvent.click(closeButton)
  jest.runAllTimers()

  expect(queryByText('Content for the drawer')).not.toBeInTheDocument()
  expect(afterHide).toHaveBeenCalled()
})

test('show and hide a child StackedDrawer by close button and context function', () => {
  const StackOfDrawers = withDrawerStack(() => {
    const { showDrawer, hideDrawer } = useDrawerStack()

    return (
      <TestThemeProvider>
        <button onClick={() => showDrawer('drawer1')}>show drawer1</button>

        <StackedDrawer id="drawer1">
          <Drawer.Header title="Title" />
          <Drawer.Content>
            <p>Content for the drawer</p>
            <button onClick={() => showDrawer('drawer2')}>show drawer2</button>

            <StackedDrawer id="drawer2" parentId="drawer1">
              <Drawer.Header title="Title" />
              <Drawer.Content>
                <p>Content for the child drawer</p>

                <button onClick={() => hideDrawer('drawer2')}>
                  hide drawer2
                </button>
              </Drawer.Content>
            </StackedDrawer>
          </Drawer.Content>
        </StackedDrawer>
      </TestThemeProvider>
    )
  })

  const { getByText, getAllByLabelText, queryByText } = render(
    <StackOfDrawers />,
  )

  fireEvent.click(getByText('show drawer1'))
  fireEvent.click(getByText('show drawer2'))

  expect(getByText('Content for the drawer')).toBeInTheDocument()
  expect(getByText('Content for the child drawer')).toBeInTheDocument()

  const closeButtons = getAllByLabelText('Close')
  expect(closeButtons[1]).toBeInTheDocument()

  fireEvent.click(closeButtons[1])
  jest.runAllTimers()

  expect(queryByText('Content for the drawer')).toBeInTheDocument()
  expect(queryByText('Content for the child drawer')).not.toBeInTheDocument()

  fireEvent.click(getByText('show drawer2'))

  expect(queryByText('Content for the child drawer')).toBeInTheDocument()

  fireEvent.click(getByText('hide drawer2'))
  jest.runAllTimers()

  expect(queryByText('Content for the child drawer')).not.toBeInTheDocument()
})

test('hide only child drawer when pressing escape (with noMask - using own code)', () => {
  const StackOfDrawers = withDrawerStack(() => {
    const { showDrawer, hideDrawer } = useDrawerStack()

    return (
      <TestThemeProvider>
        <button onClick={() => showDrawer('drawer1')}>show drawer1</button>

        <StackedDrawer id="drawer1" noMask>
          <Drawer.Header title="Title" />
          <Drawer.Content>
            <p>Content for the drawer</p>
            <button onClick={() => showDrawer('drawer2')}>show drawer2</button>

            <StackedDrawer id="drawer2" parentId="drawer1">
              <Drawer.Header title="Title" />
              <Drawer.Content>
                <p>Content for the child drawer</p>

                <button onClick={() => hideDrawer('drawer2')}>
                  hide drawer2
                </button>
              </Drawer.Content>
            </StackedDrawer>
          </Drawer.Content>
        </StackedDrawer>
      </TestThemeProvider>
    )
  })

  const { getByText, queryByText } = render(<StackOfDrawers />)

  fireEvent.click(getByText('show drawer1'))
  fireEvent.click(getByText('show drawer2'))

  expect(getByText('Content for the drawer')).toBeInTheDocument()
  expect(getByText('Content for the child drawer')).toBeInTheDocument()
  jest.runAllTimers()

  fireEvent.keyDown(global.document, {
    key: ESCAPE_EVENT_KEY,
    target: {
      hasAttribute: jest.fn(() => false),
      closest: jest.fn(() => false),
    },
  })
  jest.runAllTimers()

  expect(getByText('Content for the drawer')).toBeInTheDocument()
  expect(queryByText('Content for the child drawer')).not.toBeInTheDocument()
})

test('hide only child drawer when pressing escape (without noMask - using focusOn)', () => {
  const StackOfDrawers = withDrawerStack(() => {
    const { showDrawer, hideDrawer } = useDrawerStack()

    return (
      <TestThemeProvider>
        <button onClick={() => showDrawer('drawer1')}>show drawer1</button>

        <StackedDrawer id="drawer1">
          <Drawer.Header title="Title" />
          <Drawer.Content>
            <p>Content for the drawer</p>
            <button onClick={() => showDrawer('drawer2')}>show drawer2</button>

            <StackedDrawer id="drawer2" parentId="drawer1">
              <Drawer.Header title="Title" />
              <Drawer.Content>
                <p>Content for the child drawer</p>

                <button onClick={() => hideDrawer('drawer2')}>
                  hide drawer2
                </button>
              </Drawer.Content>
            </StackedDrawer>
          </Drawer.Content>
        </StackedDrawer>
      </TestThemeProvider>
    )
  })

  const { getByText, queryByText } = render(<StackOfDrawers />)

  fireEvent.click(getByText('show drawer1'))
  fireEvent.click(getByText('show drawer2'))

  expect(getByText('Content for the drawer')).toBeInTheDocument()
  expect(getByText('Content for the child drawer')).toBeInTheDocument()
  jest.runAllTimers()

  fireEvent.keyDown(global.document, {
    key: ESCAPE_EVENT_KEY,
    target: {
      hasAttribute: jest.fn(() => false),
      closest: jest.fn(() => false),
    },
  })
  jest.runAllTimers()

  expect(getByText('Content for the drawer')).toBeInTheDocument()
  expect(queryByText('Content for the child drawer')).not.toBeInTheDocument()
})
