// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import { oneOf, bool } from 'prop-types'
import styled from 'styled-components'

const getIconSize = (p) => {
  switch (p.size) {
    case 'small':
      return p.theme.tokens.iconSizeSmall
    case 'large':
      return p.theme.tokens.iconSizeLarge
    case 'x-large':
      return p.theme.tokens.iconSizeXLarge
    default:
      return p.theme.tokens.iconSizeDefault
  }
}

const Icon = styled.svg.withConfig({
  // Prevent props being passed to svg element when using `as`
  shouldForwardProp: (prop, defaultValidator) =>
    !['size', 'inline'].includes(prop) && defaultValidator(prop),
})`
  vertical-align: text-bottom;
  width: ${(p) => getIconSize(p)};
  height: ${(p) => getIconSize(p)};
  margin-right: ${(p) => (p.inline ? p.theme.tokens.spacing03 : 0)};
`

Icon.propTypes = {
  size: oneOf(['small', 'default', 'large', 'x-large']),
  inline: bool,
}

Icon.defaultProps = {
  size: 'default',
  inline: false,
}

export default Icon
