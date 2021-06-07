// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import styled from 'styled-components'

import mediaQueries from '../../../mediaQueries'
import { ANIMATION_SPEED_ENTER, ANIMATION_SPEED_EXIT } from '../Drawer'
import { Container, Mask, drawerContentStyle } from '../Drawer/index.styles'

export { Container, Mask }

const drawerWidth = '36.5rem'
const topOfStackDrawerGutter = '2rem'

export const DrawerContent = styled.div`
  ${drawerContentStyle}
  width: ${drawerWidth};
  transform: translateX(${drawerWidth});

  ${mediaQueries.smUp`
    padding-right: ${(p) =>
      `calc(${p.theme.tokens.spacing08} + ${topOfStackDrawerGutter})`};
  `}

  /* ORDER OF STYLES BELOW IS IMPORTANT */

  &.slide-in-enter-active {
    transition: transform ${() => ANIMATION_SPEED_ENTER}ms ease-out;
    transform: translateX(${topOfStackDrawerGutter});
  }

  &.slide-in-enter-done {
    transform: translateX(${topOfStackDrawerGutter});
  }

  &.slide-aside-enter-active {
    transform: translateX(0);
    transition: transform ${() => ANIMATION_SPEED_ENTER}ms ease-out;
  }

  &.slide-aside-enter-done {
    transform: translateX(0);
  }

  &.slide-aside-exit {
    transform: translateX(${topOfStackDrawerGutter});
    transition: transform ${() => ANIMATION_SPEED_EXIT}ms ease-in;
  }

  &.slide-in-exit {
    transform: translateX(${topOfStackDrawerGutter});
  }

  &.slide-in-exit-active {
    transform: translateX(${drawerWidth});
    transition: transform ${() => ANIMATION_SPEED_EXIT}ms ease-in;
  }
`
