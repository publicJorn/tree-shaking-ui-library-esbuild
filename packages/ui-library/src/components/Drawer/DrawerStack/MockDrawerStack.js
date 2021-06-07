// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useEffect } from 'react'
import { string, node, bool } from 'prop-types'

import StackedDrawer from '../StackedDrawer'
import Drawer from '../Drawer'
import { withDrawerStack, useDrawerStack } from './index'

const MockDrawerStack = ({ parentId, showOnRender, childId, children }) => {
  const { showDrawer } = useDrawerStack()

  useEffect(() => {
    if (showOnRender) showDrawer(parentId)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <button
        onClick={() => showDrawer(parentId)}
        data-testid="show-MockParentDrawer"
      >
        Show MockParentDrawer
      </button>

      <button
        onClick={() => showDrawer(childId)}
        data-testid={`show-${childId}`}
      >
        Show ChildDrawer
      </button>

      <StackedDrawer id={parentId}>
        <Drawer.Header title="MockParentDrawer" />
        <Drawer.Content>{children}</Drawer.Content>
      </StackedDrawer>
    </>
  )
}

MockDrawerStack.propTypes = {
  parentId: string.isRequired,
  showOnRender: bool,
  childId: string,
  children: node,
}

MockDrawerStack.defaultProps = {
  showOnRender: true,
  childID: '',
}

export default withDrawerStack(MockDrawerStack)
