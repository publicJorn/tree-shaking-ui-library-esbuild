// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
export const CREATE_DRAWER = 'CREATE_DRAWER'
export const SHOW_DRAWER = 'SHOW_DRAWER'
export const HIDE_DRAWER = 'HIDE_DRAWER'
export const RESET_DRAWER = 'RESET_DRAWER'

export const DRAWER_STATE_NOSTACK = 0
export const DRAWER_STATE_SHOW = 1
export const DRAWER_STATE_HIDE = 2
export const DRAWER_STATE_HIDDEN = 3

const drawerIsVisible = (drawer) => drawer && drawer.state === DRAWER_STATE_SHOW

const resolve = {
  CREATE_DRAWER: (oldDrawerStack, { id, parentId = '' }) => {
    const drawerStack = new Map(oldDrawerStack)

    drawerStack.set(id, {
      id,
      parentId,
      openChildId: '',
      state: DRAWER_STATE_HIDDEN,
    })

    return drawerStack
  },

  SHOW_DRAWER: (oldDrawerStack, { id }) => {
    let drawerStack = new Map(oldDrawerStack)
    const drawer = drawerStack.get(id)
    let parentDrawer = drawerStack.get(drawer.parentId)

    if (parentDrawer) {
      if (parentDrawer.openChildId) {
        drawerStack = resolve.HIDE_DRAWER(drawerStack, {
          id: parentDrawer.openChildId,
        })
        parentDrawer = drawerStack.get(drawer.parentId)
      }
      drawerStack.set(parentDrawer.id, { ...parentDrawer, openChildId: id })
    }

    drawer.state = DRAWER_STATE_SHOW

    return drawerStack
  },

  HIDE_DRAWER: (oldDrawerStack, { id }) => {
    let drawerStack = new Map(oldDrawerStack)
    let drawer = drawerStack.get(id)
    const childDrawer = drawerStack.get(drawer.openChildId)

    if (drawerIsVisible(childDrawer)) {
      // Hide all child drawers
      drawerStack = resolve.HIDE_DRAWER(drawerStack, { id: childDrawer.id })
      drawer = drawerStack.get(id)
    }

    const parentDrawer = drawerStack.get(drawer.parentId)

    if (parentDrawer) {
      drawerStack.set(parentDrawer.id, {
        ...parentDrawer,
        openChildId: '',
      })
    }

    drawer.state = DRAWER_STATE_HIDE

    return drawerStack
  },

  RESET_DRAWER: (oldDrawerStack, { id }) => {
    const drawerStack = new Map(oldDrawerStack)
    const drawer = drawerStack.get(id)

    drawer.state = DRAWER_STATE_HIDDEN

    return drawerStack
  },
}

export default function drawerReducer(drawerStack, action) {
  if (!resolve[action.type]) {
    throw new Error(`Wrong action type: ${action.type}.`)
  }

  if (!action.id) {
    throw new Error(`Every DrawerStack action requires a drawer id.`)
  }

  return resolve[action.type](drawerStack, action)
}
