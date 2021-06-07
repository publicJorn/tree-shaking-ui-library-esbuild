// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { StaticRouter as Router, NavLink } from 'react-router-dom'
import TestThemeProvider from '../../../theme/TestThemeProvider'
import DesktopNav from './index'

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

describe('the Primary Desktop Navigation', () => {
  it('should render expected number of nav items', () => {
    const { getAllByTestId } = render(
      <Router location="/">
        <TestThemeProvider>
          <DesktopNav items={navItems} LinkComponent={NavLink} />
        </TestThemeProvider>
      </Router>,
    )

    expect(getAllByTestId(/link-/)).toHaveLength(4)
  })
})
