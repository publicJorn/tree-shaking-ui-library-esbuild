// Copyright © VNG Realisatie 2021
// Licensed under the EUPL
//
import { node } from 'prop-types'
import styled from 'styled-components'

const StyledA = styled.a`
  font-family: 'Courier New', Courier, monospace;
  color: ${(p) => p.theme.colorLink};
`

/* @__PURE__ */
const Link = ({ children, ...props }) => (
  <StyledA {...props}>I MUST NOT BE IN APP - {children}</StyledA>
)

Link.propTypes = {
  children: node,
}

export default Link
