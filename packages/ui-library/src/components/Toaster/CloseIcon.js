// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { string, object, number } from 'prop-types'
import { withTheme } from 'styled-components'

const CloseIcon = ({ size, color, theme }) => {
  const fillColor = color || theme.colorText

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fillColor}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </svg>
  )
}

CloseIcon.propTypes = {
  size: number,
  color: string,
  theme: object, // provided by `withTheme`
}

CloseIcon.defaultProps = {
  size: 24,
  color: '',
}

export default withTheme(CloseIcon)
