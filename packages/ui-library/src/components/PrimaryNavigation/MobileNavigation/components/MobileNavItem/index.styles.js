// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import styled from 'styled-components'

export const Link = styled.a`
  flex: 1 1 0px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 25%;
  padding: 0;
  border: none;
  line-height: ${(p) => p.theme.tokens.lineHeightText};
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${(p) => p.theme.tokens.fontSizeSmall};
  font-weight: 500;
  color: ${(p) => p.theme.colorText};
  background-color: ${(p) => p.theme.tokens.colorPaletteGray100};

  &:focus,
  &:hover,
  &:active {
    color: ${(p) => p.theme.colorText};
    outline: 0;
  }

  &.active {
    color: ${(p) => p.theme.tokens.colorPaletteBlue800};
    background-color: ${(p) => p.theme.tokens.colorBackground};

    svg path {
      fill: ${(p) => p.theme.tokens.colorPaletteBlue800};
    }
  }
`

export const Name = styled.span`
  max-width: 100%;
  padding: ${(p) =>
    `${p.theme.tokens.spacing02} 0 ${p.theme.tokens.spacing04}`};
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`
