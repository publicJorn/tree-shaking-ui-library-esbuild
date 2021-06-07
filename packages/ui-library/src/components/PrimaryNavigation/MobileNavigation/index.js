// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useState } from 'react'
import { string } from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import primaryNavigationTypes from '../primaryNavigationTypes'
import MobileNavMenu from './components/MobileNavMenu'
import MobileSubNav from './components/MobileSubNav'

import Backdrop from './components/Backdrop'

const MOBILE_NAV_ITEMS = 4

const MobileNavigation = ({
  LinkComponent,
  pathname,
  mobileMoreText,
  items,
}) => {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false)
  const toggleSubNav = () => setIsSubNavVisible(!isSubNavVisible)

  let mainItems = []
  let moreItems = []

  if (items.length > MOBILE_NAV_ITEMS) {
    mainItems = items.slice(0, 3)
    moreItems = items.slice(3)
  } else {
    mainItems = items.slice(0)
  }

  const isMoreActive = !!moreItems.find((item) => item.to === pathname)

  return (
    <>
      {moreItems.length > 0 ? (
        <>
          <CSSTransition in={isSubNavVisible} timeout={0} classNames="fade-in">
            <Backdrop onClick={toggleSubNav} hasVisibility={isSubNavVisible} />
          </CSSTransition>

          <CSSTransition
            in={isSubNavVisible}
            timeout={50}
            classNames="slide-in"
          >
            <MobileSubNav
              LinkComponent={LinkComponent}
              items={moreItems}
              closeFunction={toggleSubNav}
            />
          </CSSTransition>
        </>
      ) : null}

      <MobileNavMenu
        LinkComponent={LinkComponent}
        items={mainItems}
        hasMoreItems={moreItems.length > 0}
        isMoreActive={isMoreActive}
        mobileMoreText={mobileMoreText}
        onClick={toggleSubNav}
      />
    </>
  )
}

MobileNavigation.propTypes = {
  ...primaryNavigationTypes,
  pathname: string.isRequired,
  mobileMoreText: string.isRequired,
}

export default MobileNavigation
