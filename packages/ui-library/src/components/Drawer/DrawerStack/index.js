// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { createContext, useReducer, useContext } from 'react'

import drawerReducer, {
  SHOW_DRAWER,
  HIDE_DRAWER,
  RESET_DRAWER,
  CREATE_DRAWER,
} from './drawerReducer'

const DrawerStackContext = createContext()

/**
 * Provides reducer actions for working with a DrawerStack
 * This prevents having to `useReducer` in calling component
 *
 * @param testState is intended for testing purposes only
 */
const withDrawerStack = (Component, testState = undefined) => {
  const EnhancedComponent = (props) => {
    const [drawerStack, dispatch] = useReducer(
      drawerReducer,
      testState || new Map(),
    )

    return (
      <DrawerStackContext.Provider
        value={{
          drawerStack,
          createDrawer: (id, parentId) =>
            dispatch({ type: CREATE_DRAWER, id, parentId }),
          showDrawer: (id) => dispatch({ type: SHOW_DRAWER, id }),
          hideDrawer: (id) => dispatch({ type: HIDE_DRAWER, id }),
          resetDrawer: (id) => dispatch({ type: RESET_DRAWER, id }),
        }}
      >
        <Component {...props} />
      </DrawerStackContext.Provider>
    )
  }

  return EnhancedComponent
}

const useDrawerStack = () => {
  const drawerStackContext = useContext(DrawerStackContext)

  if (!drawerStackContext) return null

  return {
    showDrawer: drawerStackContext.showDrawer,
    hideDrawer: drawerStackContext.hideDrawer,
  }
}

export { withDrawerStack, useDrawerStack, DrawerStackContext }
