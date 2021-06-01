// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { createPortal } from 'react-dom'
import { object, instanceOf, func } from 'prop-types'

import ToastAlert from './ToastAlert'

const ToastPortal = ({ refToasterRoot, toastMap, onRemoveToast }) => {
  return (
    refToasterRoot.current &&
    createPortal(
      <>
        {[...toastMap.entries()].map(([key, toast]) => (
          <ToastAlert
            key={key}
            mapKey={key}
            removeToast={onRemoveToast}
            {...toast}
          />
        ))}
      </>,
      refToasterRoot.current,
    )
  )
}

ToastPortal.propTypes = {
  refToasterRoot: object.isRequired,
  toastMap: instanceOf(Map).isRequired,
  onRemoveToast: func.isRequired,
}

export default ToastPortal
