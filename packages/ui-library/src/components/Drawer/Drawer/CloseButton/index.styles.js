// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//

import styled from 'styled-components'

const getSvg = (fillColor) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillColor}"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>`

export const StyledButton = styled.button`
  border: 0 none;
  cursor: pointer;
  display: block;
  float: right;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  background: url(data:image/svg+xml;base64,${(p) =>
      btoa(getSvg(p.theme.colorTextLabel))})
    no-repeat;
  width: 2rem;
  height: 2rem;
  margin-top: 0.25rem;

  &&:focus {
    outline: 2px solid ${(p) => p.theme.tokens.colorFocus};
  }
`
