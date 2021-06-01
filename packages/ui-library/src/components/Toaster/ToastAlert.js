// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useState, useEffect, useRef } from 'react'
import { func, node, string, oneOf } from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import Alert from '../Alert'
import CloseIcon from './CloseIcon'
import { AlertWrapper, CloseButton } from './index.styles'

const transitionInSpeed = 150
const transitionOutSpeed = 100
const removeDelay = 100
const lifeTime = 5000

const ToastAlert = ({ mapKey, removeToast, children, ...props }) => {
  const [transitionState, setTransitionState] = useState('')

  const refTimer = useRef(null)
  const [timerStart, setTimerStart] = useState(null)
  const [timeRemaining, setTimeRemaining] = useState(lifeTime)

  const dismiss = () => {
    setTransitionState('hide')
    pauseTimer()
    setTimeout(() => removeToast(mapKey), transitionOutSpeed + removeDelay)
  }

  const pauseTimer = () => {
    setTimeRemaining(timeRemaining - (new Date() - timerStart))
    clearTimeout(refTimer.current)
  }

  const startTimer = () => {
    setTimerStart(new Date())
    refTimer.current = setTimeout(dismiss, timeRemaining + transitionOutSpeed)
  }

  useEffect(() => {
    setTransitionState('show')
    startTimer()

    return () => pauseTimer()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CSSTransition
      in={transitionState === 'show'}
      timeout={transitionInSpeed}
      classNames="show"
    >
      <CSSTransition
        in={transitionState === 'hide'}
        timeout={transitionOutSpeed}
        classNames="hide"
      >
        <AlertWrapper
          transitionInSpeed={transitionInSpeed}
          transitionOutSpeed={transitionOutSpeed}
          onMouseEnter={pauseTimer}
          onMouseLeave={startTimer}
        >
          <CloseButton onClick={dismiss} role="button">
            <CloseIcon size={20} />
          </CloseButton>
          <Alert {...props}>{children}</Alert>
        </AlertWrapper>
      </CSSTransition>
    </CSSTransition>
  )
}

ToastAlert.propTypes = {
  mapKey: string.isRequired,
  removeToast: func.isRequired,
  children: node,
  variant: oneOf(['info', 'warning', 'success', 'error']),
}

ToastAlert.defaultProps = {
  variant: 'info',
}

export default ToastAlert
