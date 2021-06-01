// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import styled, { createGlobalStyle } from 'styled-components'

import {
  Container as AlertContainer,
  Title as AlertTitle,
  Content as AlertContent,
} from '../Alert/index.styles'

export const ToasterRootStyle = createGlobalStyle`
  #toaster-root {
    position: fixed;
    bottom: ${(p) => p.theme.tokens.spacing07};
    right: ${(p) => p.theme.tokens.spacing05};
    z-index: 1;
    overflow: hidden;
  }
`

export const AlertWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 23rem;
  margin-right: 0.5rem;
  margin-bottom: ${(p) => p.theme.tokens.spacing05};
  transform: translate(100%, 0);
  opacity: 1;
  box-shadow: 3px 4px 6px 0 rgba(0, 0, 0, 0.25);

  &.show-enter-active,
  &.show-enter-done,
  &.hide-enter {
    transition: transform ${(p) => p.transitionInSpeed}ms ease-out;
    transform: translate(0, 0);
  }

  &.hide-enter-active,
  &.hide-enter-done {
    transition: transform ${(p) => p.transitionOutSpeed}ms ease-in,
      opacity ${(p) => p.transitionOutSpeed}ms ease-in;
    transform: translate(0, 100%);
    opacity: 0;
    z-index: 0;
  }

  & ${AlertContainer} {
    flex-grow: 1;
  }

  & ${AlertTitle}, & ${AlertContent} {
    margin-right: ${(p) => p.theme.tokens.spacing06};
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: ${(p) => p.theme.tokens.spacing03};
  right: ${(p) => p.theme.tokens.spacing03};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: ${(p) => p.theme.tokens.spacing03};
  border: 0 none;
  background: transparent;
  cursor: pointer;
`
