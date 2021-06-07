// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import styled from 'styled-components'
import mediaQueries from '../../../mediaQueries'
import hex2rgba from '../../../utils/hex2rgba'

export const Wrapper = styled.div`
  ${mediaQueries.smDown`
    display: none;
  `}

  background-color: ${(p) => p.theme.tokens.colorBrand1};
`

export const Container = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.tokens.containerWidth};
  padding: 0 ${(p) => p.theme.tokens.spacing05};
  margin: 0 auto;
`

export const Nav = styled.nav``

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const ListItem = styled.li`
  a {
    padding: ${(p) =>
      `${p.theme.tokens.spacing05} ${p.theme.tokens.spacing06}`};
    color: ${(p) => p.theme.colorText};
    font-weight: ${(p) => p.theme.tokens.fontWeightSemiBold};
    text-decoration: none;

    &:active,
    &.active {
      color: ${(p) => p.theme.colorText};
      background: ${(p) => hex2rgba(p.theme.tokens.colorBackground, 0.5)};
    }
  }

  &:last-child {
    padding-right: 0;
  }

  a {
    display: inline-block;
  }
`
