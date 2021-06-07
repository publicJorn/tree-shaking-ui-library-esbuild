// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TestThemeProvider from '../../../theme/TestThemeProvider'
import StackedDrawer from '../StackedDrawer'
import Drawer from '../Drawer'
import MockDrawerStack from './MockDrawerStack'

const TestComponent = () => (
  <StackedDrawer id="test" parentId="parentOfTest">
    <Drawer.Header title="TestComponent" />
    <Drawer.Content>Tested</Drawer.Content>
  </StackedDrawer>
)

test('create and open a mock drawer stack', () => {
  const { getByTestId, getByText } = render(
    <TestThemeProvider>
      <MockDrawerStack parentId="parentOfTest" childId="test">
        <TestComponent />
      </MockDrawerStack>
    </TestThemeProvider>,
  )

  expect(getByTestId('show-MockParentDrawer')).toBe(
    getByText('Show MockParentDrawer'),
  )
  expect(getByTestId('show-test')).toBe(getByText('Show ChildDrawer'))
  expect(getByText('MockParentDrawer')).toBeInTheDocument()

  fireEvent.click(getByTestId('show-test'))
  expect(getByText('TestComponent')).toBeInTheDocument()
})

test('manually open parent drawer', () => {
  const { getByTestId, getByText, queryByText } = render(
    <TestThemeProvider>
      <MockDrawerStack parentId="parentOfTest" showOnRender={false}>
        <TestComponent />
      </MockDrawerStack>
    </TestThemeProvider>,
  )

  expect(queryByText('MockParentDrawer')).not.toBeInTheDocument()

  fireEvent.click(getByTestId('show-MockParentDrawer'))
  expect(getByText('MockParentDrawer')).toBeInTheDocument()
})
