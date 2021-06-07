// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { createContext, useEffect, useState } from 'react'
import { bool, func, node } from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import Header from './Header'
import Content from './Content'
import CloseButton from './CloseButton'
import { Container, DrawerContent, Mask } from './index.styles'
import FocusContainer from './FocusContainer'

export const ANIMATION_SPEED_ENTER = 200
export const ANIMATION_SPEED_EXIT = 125

// Used by Header to close
export const DrawerContext = createContext()

/**
 * Use `Drawer` to display an overlay providing more information.
 */
const Drawer = ({
  skipOpenAnimation,
  autoFocus,
  noMask,
  closeHandler,
  children,
  ...props
}) => {
  const [inProp, setInProp] = useState(!!skipOpenAnimation)
  const close = () => setInProp(false)

  useEffect(() => {
    setInProp(true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container {...props}>
      {!noMask ? (
        <CSSTransition
          in={inProp}
          appear={skipOpenAnimation}
          timeout={0}
          classNames="fade-in"
        >
          <Mask />
        </CSSTransition>
      ) : null}

      <FocusContainer
        close={close}
        inProp={inProp}
        noMask={noMask}
        autoFocus={autoFocus}
      >
        <CSSTransition
          in={inProp}
          timeout={{
            appear: 0,
            enter: ANIMATION_SPEED_ENTER,
            exit: ANIMATION_SPEED_EXIT,
          }}
          classNames="slide-aside"
        >
          <CSSTransition
            in={inProp}
            appear={skipOpenAnimation}
            timeout={{
              appear: 0,
              enter: ANIMATION_SPEED_ENTER,
              exit: ANIMATION_SPEED_EXIT,
            }}
            classNames="slide-in"
            onExited={closeHandler}
          >
            <DrawerContent data-testid="content" data-drawer>
              <DrawerContext.Provider value={{ close }}>
                {children}
              </DrawerContext.Provider>
            </DrawerContent>
          </CSSTransition>
        </CSSTransition>
      </FocusContainer>
    </Container>
  )
}

Drawer.propTypes = {
  skipOpenAnimation: bool,
  autoFocus: bool,
  noMask: bool,
  closeHandler: func.isRequired,
  children: node.isRequired,
}

Drawer.defaultProps = {
  skipOpenAnimation: false,
  autoFocus: false,
  noMask: false,
}

Drawer.Header = Header
Drawer.Content = Content
Drawer.CloseButton = CloseButton

export default Drawer
