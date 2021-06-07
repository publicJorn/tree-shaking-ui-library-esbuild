// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import styled from 'styled-components'
import IconChevronDown from '../../../../IconFlippingChevron/IconChevronDown'
import { mobileNavigationHeight } from '../MobileNavMenu/index.styles'

export const Wrapper = styled.div`
  position: fixed;
  bottom: ${mobileNavigationHeight};
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: ${(p) => p.theme.tokens.colorBackground};

  transform: translate(0, 100%);
  transition: transform 120ms ease-out;

  &.slide-in-enter-done {
    transform: translate(0, 0);
  }

  &.slide-in-exit-done {
    transition: transform 80ms ease-in;
    transform: translate(0, 100%);
  }
`

export const Header = styled.header`
  padding-top: 0.5rem;
  text-align: right;
`

const StyledCloseButton = styled.button`
  padding: 0;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border: none;
  margin: 0.5rem 1rem;
  line-height: 0;
  color: ${(p) => p.theme.tokens.colorPaletteGray600};
  background: none;

  &::before {
    display: block;
    content: '✕';
    font-size: 2rem;
  }

  span {
    visibility: hidden;
  }
`

export const CloseButton = (props) => (
  <StyledCloseButton type="button" {...props}>
    <span>navigatie sluiten</span>
  </StyledCloseButton>
)

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem;
`

export const ListItem = styled.li`
  border-top: 1px solid ${(p) => p.theme.tokens.colorPaletteGray300};
`

export const Link = styled.a`
  position: relative;
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: ${(p) => p.theme.colorText};

  &.active {
    font-weight: bold;
    color: ${(p) => p.theme.tokens.colorPaletteBlue800};
  }
`

export const IconChevronRight = styled(IconChevronDown)`
  position: absolute;
  top: 50%;
  right: 1rem;
  margin-top: -6px;
  transform: rotate(-90deg);

  path {
    fill: ${(p) => p.theme.tokens.colorPaletteGray400};
  }
`
