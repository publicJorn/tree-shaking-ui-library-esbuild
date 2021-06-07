// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import styled, { css } from 'styled-components'
import mediaQueries from '../../../mediaQueries'

import { ANIMATION_SPEED_ENTER, ANIMATION_SPEED_EXIT } from './index'

const drawerWidth = '34.5rem'

export const Container = styled.div`
  z-index: 10;
`

export const Mask = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.25;
  background: rgba(0, 0, 0, 0.6);
  transform: translateX(-100%);

  transition: opacity ${() => ANIMATION_SPEED_ENTER}ms;

  &.fade-in-appear {
    opacity: 0.75;
  }

  &.fade-in-enter-done {
    transform: translateX(0);
    opacity: 0.75;
  }
`

export const drawerContentStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: ${(p) => p.theme.tokens.spacing05};
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${(p) => p.theme.colorBackgroundDrawer};
  box-shadow: 0 0 ${(p) => p.theme.tokens.spacing06} 0 rgba(0, 0, 0, 0.5);

  ${mediaQueries.smUp`
    padding: ${(p) => p.theme.tokens.spacing08};
  `}
`

export const DrawerContent = styled.div`
  ${drawerContentStyle}
  width: ${drawerWidth};
  transform: translateX(${drawerWidth});

  /* ORDER OF STYLES BELOW IS IMPORTANT */

  &.slide-in-enter-active {
    transition: transform ${() => ANIMATION_SPEED_ENTER}ms ease-out;
    transform: translateX(0);
  }

  &.slide-in-enter-done {
    transform: translateX(0);
  }

  &.slide-in-exit {
    transform: translateX(0);
  }

  &.slide-in-exit-active {
    transform: translateX(${drawerWidth});
    transition: transform ${() => ANIMATION_SPEED_EXIT}ms ease-in;
  }
`
