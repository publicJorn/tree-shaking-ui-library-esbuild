import React from 'react'
import styled from 'styled-components'

const StyledA = styled.a`
  font-family: 'Courier New', Courier, monospace;
  color: #306eff;
`

const Link = ({ ...props }) => <StyledA {...props}>I MUST NOT BE HERE</StyledA>

export default Link
