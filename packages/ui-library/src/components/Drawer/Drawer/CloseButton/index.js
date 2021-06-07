// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { StyledButton } from './index.styles'

const CloseButton = ({ ...props }) => (
  <StyledButton type="button" role="button" {...props} />
)

export default CloseButton
