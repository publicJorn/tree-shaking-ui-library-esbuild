// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import styled from 'styled-components'
import getInfoStyles from './info.style'
import getWarningStyles from './warning.style'
import getErrorStyles from './error.style'
import getSuccessStyles from './success.style'

export const Container = styled.div`
  padding: ${(p) => p.theme.tokens.spacing05} ${(p) => p.theme.tokens.spacing05}
    ${(p) => p.theme.tokens.spacing05} 3rem;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 14px 18px;
  border-left: ${(p) => p.theme.tokens.spacing02} solid;

  ${(p) => {
    switch (p.variant) {
      case 'info':
        return getInfoStyles(p)
      case 'warning':
        return getWarningStyles(p)
      case 'error':
        return getErrorStyles(p)
      case 'success':
        return getSuccessStyles(p)
      default:
        return getInfoStyles(p)
    }
  }}
`

export const Title = styled.p`
  font-weight: ${(p) => p.theme.tokens.fontWeightBold};
  margin: 0;
`

export const Content = styled.p`
  margin: 0;
`

export const Actions = styled.p`
  margin: ${(p) => p.theme.tokens.spacing03} 0 0 0;

  button,
  a {
    margin-right: ${(p) => p.theme.tokens.spacing06};
  }
`
