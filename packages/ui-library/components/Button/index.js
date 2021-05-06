import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;

  ${(p) => {
    switch (p.variant) {
      case 'secondary':
        return 'background-color: #ccc;'

      default:
        return 'background-color: lime;'
    }
  }}
`

const Button = ({ ...props }) => <StyledButton {...props}>I SHOULD BE HERE</StyledButton>

export default Button
