// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import styled from 'styled-components'

export const mobileNavigationHeight = '4.5rem'

export const MobileNavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: ${mobileNavigationHeight};
  border-top: 1px solid ${(p) => p.theme.tokens.colorBackground};
  background-color: ${(p) => p.theme.tokens.colorBackground};
  box-shadow: 0 0 10px 2px ${(p) => p.theme.tokens.colorPaletteGray400};
`
