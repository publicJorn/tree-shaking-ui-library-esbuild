// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { StaticRouter as Router, NavLink } from 'react-router-dom'
import TestThemeProvider from '../../../theme/TestThemeProvider'
import MobileNav from './index'

const Icon = () => <span>Icon</span>

const navItems3 = [
  {
    name: 'Home',
    Icon,
    to: '/',
    'data-testid': 'link-homepage',
  },
  {
    name: 'Producten',
    Icon,
    to: '/producten',
    'data-testid': 'link-products',
  },
  {
    name: 'Componenten',
    Icon,
    to: '/componenten',
    'data-testid': 'link-components',
  },
]

const navItems5 = [
  {
    name: 'Home',
    Icon,
    to: '/',
    'data-testid': 'link-homepage',
  },
  {
    name: 'Producten',
    Icon,
    to: '/producten',
    'data-testid': 'link-products',
  },
  {
    name: 'Componenten',
    Icon,
    to: '/componenten',
    'data-testid': 'link-components',
  },
  {
    name: 'Principes',
    to: '/principes',
    'data-testid': 'link-principes',
  },
  {
    name: 'Docs',
    to: '/docs',
    'data-testid': 'link-docs',
  },
]

function buildMobileNav(items) {
  return render(
    <Router location="/docs">
      <TestThemeProvider>
        <MobileNav
          items={items}
          LinkComponent={NavLink}
          pathname="/docs"
          mobileMoreText="More..."
        />
      </TestThemeProvider>
    </Router>,
  )
}

describe('the Primary Mobile Navigation', () => {
  it('should render expected number of nav items', () => {
    const { queryAllByTestId, queryByRole, queryByText } = buildMobileNav(
      navItems3,
    )

    expect(queryAllByTestId(/link-/)).toHaveLength(3)
    expect(queryByRole('navigation').children).toHaveLength(3)
    expect(queryByText('More...')).not.toBeInTheDocument()
  })

  it('should render a maximum of three links items', () => {
    const { queryAllByTestId, queryByRole, queryByText } = buildMobileNav(
      navItems5,
    )

    expect(queryAllByTestId(/link-/)).toHaveLength(5)
    expect(queryByRole('navigation').children).toHaveLength(4) // includes more button
    expect(queryByRole('modal').children).toHaveLength(2)
    expect(queryByText('More...')).toBeInTheDocument()
  })

  it('should show subnav when more button is clicked', async () => {
    const { queryByRole, queryByText } = buildMobileNav(navItems5)
    const subnav = queryByRole('modal')

    expect(subnav).not.toHaveClass('slide-in-enter-done')

    fireEvent.click(queryByText('More...'))

    await waitFor(() => {
      expect(subnav).toHaveClass('slide-in-enter-done')
    })
    expect(subnav.children).toHaveLength(2)

    const links = subnav.querySelectorAll('a')
    expect(links[0]).toHaveAttribute('href', '/principes')
    expect(links[1]).toHaveAttribute('href', '/docs')
  })
})
