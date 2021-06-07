// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import { bool, number } from 'prop-types'
import styled, { css } from 'styled-components'

import IconChevronDown from './IconChevronDown'

const IconFlippingChevron = styled(IconChevronDown).withConfig({
  // Prevent props being passed to svg element
  shouldForwardProp: (prop, defaultValidator) =>
    !['flipHorizontal', 'animationDuration'].includes(prop) &&
    defaultValidator(prop),
})`
  fill: ${(p) => p.theme.colorText};
  transition: ${(p) => p.animationDuration}ms ease-in-out;

  ${(p) =>
    p.flipHorizontal
      ? css`
          transform: rotate(180deg);
        `
      : ''}
`

IconFlippingChevron.propTypes = {
  flipHorizontal: bool,
  animationDuration: number,
}

IconFlippingChevron.defaultProps = {
  animationDuration: 150,
}

export default IconFlippingChevron
