// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { func, string } from 'prop-types'
import IconMore from './IconMore'
import MobileNavItem from './MobileNavItem'

const MobileMoreButton = ({ mobileMoreText, ...props }) => (
  <MobileNavItem
    as="button"
    type="button"
    Icon={IconMore}
    name={mobileMoreText}
    {...props}
  />
)

MobileMoreButton.propTypes = {
  onClick: func.isRequired,
  mobileMoreText: string.isRequired,
}

export default MobileMoreButton
