// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import mediaQueries from '../../mediaQueries'

export default createGlobalStyle`
  ${normalize}

  html {
    background-color: ${(p) => {
      console.log(p)
      return p.theme.tokens.colorBackground
    }};
    color: ${(p) => p.theme.colorText};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: ${(p) => p.theme.tokens.baseFontSize};
    font-weight: ${(p) => p.theme.tokens.fontWeightRegular};
    line-height: ${(p) => p.theme.tokens.lineHeightText};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  h1 {
    line-height: ${(p) => p.theme.tokens.lineHeightHeading};
    font-weight: ${(p) => p.theme.tokens.fontWeightBold};
    font-size: ${(p) => p.theme.tokens.fontSizeXXLarge};
    margin: 0 0 ${(p) => p.theme.tokens.spacing05} 0;

    ${mediaQueries.xs`
      font-size: ${(p) => p.theme.tokens.fontSizeXLarge};
    `}
  }

  h2 {
    line-height: ${(p) => p.theme.tokens.lineHeightHeading};
    font-weight: ${(p) => p.theme.tokens.fontWeightBold};
    font-size: ${(p) => p.theme.tokens.fontSizeXLarge};
    margin: ${(p) => p.theme.tokens.spacing09} 0
      ${(p) => p.theme.tokens.spacing04} 0;

    ${mediaQueries.xs`
      font-size: ${(p) => p.theme.tokens.fontSizeLarge};
      margin-top: ${(p) => p.theme.tokens.spacing07};
    `}
  }
 
  h3 {
    line-height: ${(p) => p.theme.tokens.lineHeightHeading};
    font-weight: ${(p) => p.theme.tokens.fontWeightBold};
    font-size: ${(p) => p.theme.tokens.fontSizeLarge};
    margin: ${(p) => p.theme.tokens.spacing07} 0
      ${(p) => p.theme.tokens.spacing04} 0;

    ${mediaQueries.xs`
      font-size: ${(p) => p.theme.tokens.fontSizeMedium};
      margin-top: ${(p) => p.theme.tokens.spacing05};
    `}
  }

  p {
    font-size: ${(p) => p.theme.tokens.fontSizeMedium};
    margin: 0 0 ${(p) => p.theme.tokens.spacing05} 0;
  }
  
  small {
    font-size: ${(p) => p.theme.tokens.fontSizeSmall};
    color: ${(p) => p.theme.colorTextLabel};
  }
  
  a {
    text-decoration-skip-ink: auto;
    color: ${(p) => p.theme.colorTextLink};
    
    &:hover,
    &:active {
      color: ${(p) => p.theme.colorTextLinkHover};
    }
  }
  
  a[disabled] {
    pointer-events: none;
  }
`
