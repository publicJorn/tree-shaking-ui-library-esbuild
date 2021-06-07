// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter as Router, NavLink } from 'react-router-dom'
import TestThemeProvider from '../../theme/TestThemeProvider'
import PrimaryNavigation from './index'

const navItems = [
  {
    name: 'Home',
    to: '/',
    'data-testid': 'link-homepage',
  },
  {
    name: 'Producten',
    to: '/producten',
    'data-testid': 'link-products',
  },
  {
    name: 'Componenten',
    to: '/componenten',
    'data-testid': 'link-components',
  },
  {
    name: 'Principes',
    to: '/principes',
    'data-testid': 'link-principes',
  },
]

// We don't care about the component tree, just to see if the screen-width logic works
jest.mock('./MobileNavigation', () => () => <nav data-testid="mobile-nav" />)
jest.mock('./DesktopNavigation', () => () => <nav data-testid="desktop-nav" />)

const defaultWindowSize = {
  x: global.innerWidth,
  y: global.innerHeight,
}

const resizeWindow = (x, y) => {
  global.innerWidth = x
  global.innerHeight = y
  global.dispatchEvent(new Event('resize'))
}

// Because of the debounce
beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.runAllTimers()
  global.innerWidth = defaultWindowSize.x
  global.innerHeight = defaultWindowSize.y
})

const createInstance = () =>
  render(
    <TestThemeProvider>
      <Router>
        <PrimaryNavigation items={navItems} LinkComponent={NavLink} />
      </Router>
    </TestThemeProvider>,
  )

test('show mobile navigation on small screens', async () => {
  const { findByTestId } = createInstance()
  resizeWindow(360, 500)
  expect(await findByTestId('mobile-nav')).toBeTruthy()
})

test('show wide navigation on larger screens', async () => {
  const { findByTestId } = createInstance()
  resizeWindow(1200, 800)
  expect(await findByTestId('desktop-nav')).toBeTruthy()
})
