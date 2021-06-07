// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { string, node } from 'prop-types'
import { StaticRouter, NavLink } from 'react-router-dom'
import { ReactComponent as IconHome } from './home.svg'
import PrimaryNavigation from './index'

const primaryNavigationStory = {
  title: 'Components/PrimaryNavigation',
  description: 'asyasdf',
  parameters: {
    componentSubtitle: 'Responsive, single level navigation.',
  },
  component: PrimaryNavigation,
}

export default primaryNavigationStory

export const Default = () => (
  <>
    <div style={{ margin: '1rem 0' }}>
      <WithReactRouter />
    </div>
    <p>
      ⚠️ &nbsp;Currently only the <code>Light theme</code> is supported.
    </p>
    <p>
      Can be used with <code>react-router-dom:Link</code> or{' '}
      <code>nextjs/Link</code>. Pass it with the <code>LinkComponent</code>{' '}
      prop.
    </p>
    <p>
      The mobile version has a "more" button when there are 5+ items. In order
      to style it when an underlying item is active, the <code>pathname</code>{' '}
      is needed.
      <br />
      Use react-router's <code>useLocation()</code> or Next's{' '}
      <code>useRouter()</code> to obtain this.
    </p>
  </>
)

export const WithReactRouter = () => {
  const navItems = [
    {
      name: 'Home',
      to: '/',
      Icon: IconHome,
      exact: true,
    },
    {
      name: 'Page one',
      to: '/page1',
    },
    {
      name: 'Page two',
      to: '/page2',
    },
    {
      name: 'Page three',
      to: '/page3',
    },
    {
      name: 'Page four',
      to: '/page4',
    },
  ]

  // In a real app, take pathname from `useLocation()`
  const pathname = '/'
  return (
    <StaticRouter>
      <PrimaryNavigation
        items={navItems}
        LinkComponent={NavLink}
        pathname={pathname}
        mobileMoreText="More"
      />
    </StaticRouter>
  )
}

export const WithNextJS = () => {
  const navItems = [
    {
      name: 'Home',
      to: '/',
      Icon: IconHome,
    },
    {
      name: 'Page one',
      to: '/page1',
    },
    {
      name: 'Page two',
      to: '/page2',
    },
    {
      name: 'Page three',
      to: '/page3',
    },
    {
      name: 'Page four',
      to: '/page4',
    },
  ]

  // In nextjs, you need to create a custom link component, because next/Link
  // does not support multiple children or setting an "active" classname.
  // See: https://nextjs.org/docs/api-reference/next/router
  const MyLink = ({ to, className, children }) => {
    // In a real app, use `useRouter` instead
    const router = { basePath: '', pathname: '/page4' }
    const href = router.basePath + to
    const finalClassName =
      router.pathname === to ? `${className} active` : className
    return (
      <a href={href} className={finalClassName}>
        {children}
      </a>
    )
  }

  // Your custom Link component receives the props you passed to navItems except `name`
  MyLink.propTypes = {
    to: string, // use this to create href
    className: string, // from styled-components
    children: node,
  }

  // In a real app, take pathname from `useRouter()`
  const pathname = '/page4'
  return (
    <PrimaryNavigation
      items={navItems}
      LinkComponent={MyLink}
      pathname={pathname}
      mobileMoreText="More"
    />
  )
}
