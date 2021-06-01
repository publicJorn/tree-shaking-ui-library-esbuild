// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
export const ADD_TOAST = 'add'
export const REMOVE_TOAST = 'remove'

export default function reducer(toastMap, action) {
  switch (action.type) {
    case ADD_TOAST:
      return new Map(toastMap.set(action.key, action.toast))

    case REMOVE_TOAST:
      toastMap.delete(action.key)
      return new Map(toastMap)

    default:
      throw new Error(`Wrong action type "${action.type}" for toast reducer`)
  }
}
