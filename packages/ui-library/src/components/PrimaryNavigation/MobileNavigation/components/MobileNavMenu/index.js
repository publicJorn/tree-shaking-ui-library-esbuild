// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { array, bool, func, elementType, string } from 'prop-types'

import MobileNavItem from '../MobileNavItem'
import MobileMoreButton from '../MobileMoreButton'

import { MobileNavWrapper } from './index.styles'

const MobileNavMenu = ({
  LinkComponent,
  items,
  hasMoreItems,
  onClick,
  isMoreActive,
  mobileMoreText,
}) => (
  <MobileNavWrapper role="navigation">
    {items.map((item) => (
      <MobileNavItem
        key={item.name}
        to={item.to}
        LinkComponent={LinkComponent}
        {...item}
      />
    ))}
    {hasMoreItems ? (
      <MobileMoreButton
        onClick={onClick}
        className={isMoreActive && 'active'}
        mobileMoreText={mobileMoreText}
      />
    ) : null}
  </MobileNavWrapper>
)

MobileNavMenu.propTypes = {
  LinkComponent: elementType.isRequired,
  items: array.isRequired,
  hasMoreItems: bool.isRequired,
  onClick: func.isRequired,
  isMoreActive: bool.isRequired,
  mobileMoreText: string.isRequired,
}

export default MobileNavMenu
