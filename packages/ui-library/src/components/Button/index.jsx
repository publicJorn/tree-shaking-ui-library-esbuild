// Copyright © VNG Realisatie 2021
// Licensed under the EUPL
//
import { node, oneOf } from 'prop-types'
import styled from 'styled-components'

const getColor = (p) => {
  switch (p.variant) {
    case 'secondary':
      return p.theme.colorSecondary

    case 'primary':
    default:
      return p.theme.colorPrimary
  }
}

const StyledButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${(p) => getColor(p)};
`

/* @__PURE__ */
const Button = ({ children, ...props }) => (
  <StyledButton {...props}>I SHOULD BE IN APP - {children}</StyledButton>
)

Button.propTypes = {
  children: node,
  variant: oneOf(['', 'primary', 'secondary']),
}

Button.defaultProps = {
  variant: '',
}

export default Button
