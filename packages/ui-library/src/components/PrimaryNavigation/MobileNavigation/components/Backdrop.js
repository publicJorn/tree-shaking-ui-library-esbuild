// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useState, useEffect } from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'

const TRANSITION_TIME = 170

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: ${(p) => p.theme.tokens.colorPaletteGray900};
  opacity: 0;

  transition: opacity ${TRANSITION_TIME}ms, transform 0ms;

  &.fade-in-enter-done {
    opacity: 0.75;
  }
`

const Backdrop = ({ hasVisibility, ...props }) => {
  const [isHidden, setHidden] = useState(true)

  useEffect(() => {
    if (!hasVisibility) {
      setTimeout(() => {
        setHidden(true)
      }, TRANSITION_TIME)
    } else {
      setHidden(false)
    }
  }, [hasVisibility])

  return (
    <StyledBackdrop
      {...props}
      style={{ display: isHidden ? 'none' : 'block' }}
    />
  )
}

Backdrop.propTypes = {
  hasVisibility: bool,
}
export default Backdrop
