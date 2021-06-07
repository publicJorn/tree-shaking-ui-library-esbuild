// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//

import React, { useEffect } from 'react'
import { FocusOn } from 'react-focus-on'
import FocusLock from 'react-focus-lock'
import { bool, func } from 'prop-types'

const ESCAPE_EVENT_KEY = 'Escape'

const FocusContainer = ({ noMask, inProp, close, ...props }) => {
  useEffect(() => {
    // Without a mask, we need to handle the escape key manually.
    if (noMask) {
      const keydownHandler = (evt) => {
        if (evt.key === ESCAPE_EVENT_KEY) {
          close(evt)
        }
      }

      document.addEventListener('keydown', keydownHandler)
      return () => document.removeEventListener('keydown', keydownHandler)
    }
  }, [noMask, close])

  return !noMask ? (
    <FocusOn
      enabled={inProp}
      onClickOutside={!noMask ? close : null}
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
}

FocusContainer.defaultProps = {
  noMask: false,
  autoFocus: false,
}

export default FocusContainer
