// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useContext } from 'react'
import { string } from 'prop-types'

import { useDrawerStack } from '../../index'
import { StackedDrawerContext } from '../../StackedDrawer'
import { DrawerContext } from '../index'
import CloseButton from '../CloseButton'
import { StyledHeader, StyledTitle } from './index.styles'

const Header = ({ title, closeButtonLabel, ...props }) => {
  const drawerStack = useDrawerStack()

  /* eslint-disable react-hooks/rules-of-hooks */
  // Disabled so Drawer.Header can be used both within Drawer and StackedDrawer
  const { close } = drawerStack
    ? useContext(StackedDrawerContext)
    : useContext(DrawerContext)
  /* eslint-enable */

  return (
    <StyledHeader {...props}>
      <StyledTitle>{title}</StyledTitle>
      <CloseButton
        onClick={close}
        data-testid="close-button"
        aria-label={closeButtonLabel}
        title={closeButtonLabel}
      />
    </StyledHeader>
  )
}

Header.propTypes = {
  title: string,
  closeButtonLabel: string,
}

Header.defaultProps = {
  closeButtonLabel: 'Close',
}

export default Header
