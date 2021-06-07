// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useState, useEffect, useMemo } from 'react'
import debounce from '../../utils/debounce'
import breakpoints from '../../theme/parts/breakpoints'
import primaryNavigationTypes from './primaryNavigationTypes'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const PrimaryNavigation = (props) => {
  const [isMobile, setIsMobile] = useState(false)

  const resizeHandler = useMemo(() => {
    return debounce(() => {
      setIsMobile(window.innerWidth < breakpoints.md)
    })
  }, [])

  useEffect(() => {
    window && window.addEventListener('resize', resizeHandler)
    resizeHandler()

    return () => {
      window && window.removeEventListener('resize', resizeHandler)
    }
  }, [resizeHandler])

  return isMobile ? (
    <MobileNavigation {...props} />
  ) : (
    <DesktopNavigation {...props} />
  )
}

PrimaryNavigation.propTypes = { ...primaryNavigationTypes }

export default PrimaryNavigation

export { mobileNavigationHeight } from './MobileNavigation/components/MobileNavMenu/index.styles'
