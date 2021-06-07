// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//

import React, { useEffect } from 'react'
import { FocusOn } from 'react-focus-on'
import FocusLock from 'react-focus-lock'
import { bool, func, oneOf, string } from 'prop-types'
import {
  DRAWER_STATE_HIDDEN,
  DRAWER_STATE_HIDE,
  DRAWER_STATE_NOSTACK,
  DRAWER_STATE_SHOW,
} from '../../DrawerStack/drawerReducer'

const ESCAPE_EVENT_KEY = 'Escape'

const FocusContainer = ({
  noMask,
  inProp,
  close,
  state,
  parentId,
  hasOpenChildDrawer,
  ...props
}) => {
  useEffect(() => {
    if (state !== DRAWER_STATE_SHOW) return

    // Without a mask, we need to handle the escape key manually.
    const keydownHandler = (event) => {
      if (event.key === ESCAPE_EVENT_KEY && !hasOpenChildDrawer) {
        close(event)
      }
    }

    // If this is a child and the parent has a mask, we do want the child to close
    const clickHandler = (event) => {
      if (event.target.hasAttribute('data-mask')) {
        close(event)
      }
    }

    if (noMask) {
      document.addEventListener('keydown', keydownHandler)
      if (parentId) document.addEventListener('click', clickHandler)
      return () => {
        document.removeEventListener('keydown', keydownHandler)
        if (parentId) document.removeEventListener('click', clickHandler)
      }
    }
  }, [noMask, close, state, parentId, hasOpenChildDrawer])

  return !noMask ? (
    <FocusOn
      enabled={inProp}
      onClickOutside={!noMask || parentId ? close : null}
      onEscapeKey={close}
      returnFocus
      {...props}
    />
  ) : (
    <FocusLock returnFocus {...props} />
  )
}

FocusContainer.propTypes = {
  noMask: bool,
  inProp: bool.isRequired,
  close: func.isRequired,
  autoFocus: bool,
  parentId: string,
  hasOpenChildDrawer: bool,
  state: oneOf([
    DRAWER_STATE_NOSTACK,
    DRAWER_STATE_SHOW,
    DRAWER_STATE_HIDE,
    DRAWER_STATE_HIDDEN,
  ]).isRequired,
}

FocusContainer.defaultProps = {
  noMask: false,
  autoFocus: false,
  parentId: '',
  hasOpenChildDrawer: false,
}

export default FocusContainer
