// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { string, elementType } from 'prop-types'
import { Link, Name } from './index.styles'

const MobileNavigationItem = ({ LinkComponent, name, Icon, ...otherProps }) => {
  if (LinkComponent !== undefined) {
    otherProps.as = LinkComponent
  }

  return (
    <Link {...otherProps}>
      <Name>{name}</Name>
      {Icon ? <Icon /> : null}
    </Link>
  )
}

MobileNavigationItem.propTypes = {
  LinkComponent: elementType,
  name: string.isRequired,
  Icon: elementType,
}

export default MobileNavigationItem
