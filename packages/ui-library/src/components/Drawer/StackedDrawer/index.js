// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { bool, func, node, string } from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { DrawerStackContext } from '../DrawerStack/index'
import {
  DRAWER_STATE_HIDE,
  DRAWER_STATE_NOSTACK,
  DRAWER_STATE_SHOW,
} from '../DrawerStack/drawerReducer'
import { ANIMATION_SPEED_ENTER, ANIMATION_SPEED_EXIT } from '../Drawer'
import { Container, DrawerContent, Mask } from './index.styles'
import FocusContainer from './FocusContainer'

// Used by Header to close
export const StackedDrawerContext = createContext()

const StackedDrawer = ({
  id,
  parentId,
  noMask,
  autoFocus,
  skipOpenAnimation,
  afterHide,
  children,
  ...props
}) => {
  const drawerStackContext = useContext(DrawerStackContext)

  if (!drawerStackContext) {
    throw Error(
      `No DrawerStack found: use \`withDrawerStack()\` around the parent of <StackedDrawer id=${id}>.`,
    )
  }

  const [inProp, setInProp] = useState(skipOpenAnimation)
  const {
    drawerStack,
    createDrawer,
    hideDrawer,
    resetDrawer,
  } = drawerStackContext

  const drawerConfig = drawerStack.get(id)
  const state = (drawerConfig && drawerConfig.state) || DRAWER_STATE_NOSTACK
  const hasOpenChildDrawer = !!(drawerConfig && drawerConfig.openChildId)
  const renderNoMask = parentId ? true : noMask

  const close = useCallback(() => {
    if (state === DRAWER_STATE_SHOW) {
      hideDrawer(id)
    }
  }, [hideDrawer, id, state])

  const exitHandler = () => {
    if (state === DRAWER_STATE_HIDE) {
      resetDrawer(id)
      afterHide()
    }
  }

  useEffect(() => {
    switch (state) {
      case DRAWER_STATE_NOSTACK:
        createDrawer(id, parentId)
        break

      case DRAWER_STATE_SHOW:
        setInProp(true)
        break

      case DRAWER_STATE_HIDE:
        setInProp(false)
        break

      default:
    }
  }, [createDrawer, id, parentId, state])

  // Config will be available at next render
  if (!drawerConfig) return null

  // Wait for next render when `setInProp` has een processed
  if (skipOpenAnimation && state === DRAWER_STATE_SHOW && !inProp) return null

  const showDrawer = state === DRAWER_STATE_SHOW || state === DRAWER_STATE_HIDE

  return (
    showDrawer && (
      <Container {...props}>
        {!renderNoMask ? (
          <CSSTransition
            in={inProp}
            appear={skipOpenAnimation}
            timeout={0}
            classNames="fade-in"
          >
            <Mask data-mask />
          </CSSTransition>
        ) : null}
        <FocusContainer
          close={close}
          state={state}
          inProp={inProp}
          noMask={renderNoMask}
          autoFocus={autoFocus}
          parentId={parentId}
          hasOpenChildDrawer={hasOpenChildDrawer}
        >
          <CSSTransition
            in={inProp && !!hasOpenChildDrawer}
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
              onExited={exitHandler}
            >
              <DrawerContent data-testid="content" data-drawer={id}>
                <StackedDrawerContext.Provider value={{ close }}>
                  {children}
                </StackedDrawerContext.Provider>
              </DrawerContent>
            </CSSTransition>
          </CSSTransition>
        </FocusContainer>
      </Container>
    )
  )
}

StackedDrawer.propTypes = {
  id: string.isRequired,
  parentId: string,
  noMask: bool,
  autoFocus: bool,
  skipOpenAnimation: bool,
  afterHide: func,
  children: node.isRequired,
}

StackedDrawer.defaultProps = {
  parentId: '',
  noMask: false,
  autoFocus: false,
  skipOpenAnimation: false,
  afterHide: () => {},
}

export default StackedDrawer
