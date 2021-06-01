// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useRef, useEffect, useContext, useReducer } from 'react'
import { node, string } from 'prop-types'

import reducer, { ADD_TOAST, REMOVE_TOAST } from './toastReducer'
import ToastPortal from './ToastPortal'
import { ToasterRootStyle } from './index.styles'

const ToasterContext = React.createContext()

/**
 * Use a Toast for global feedback.
 *
 * A Toast is based on the `Alert` component, which is intended for local feedback.
 *
 * Initialise the toaster by setting `ToasterProvider` high up the React tree.
 * To show a toast, either use the `showToast()` function provided by the `ToasterContext`
 * or the `<Toast />` component in your jsx.
 */
const ToasterProvider = ({ rootSelector, children }) => {
  const createRandomId = () => Math.random().toString(36).slice(2)

  if (useContext(ToasterContext) !== undefined) {
    console.warn(
      'It looks like you are nesting ToasterProviders. Please use only one.',
    )
  }

  const refToasterRoot = useRef(null)
  const isMounted = useRef(false)

  useEffect(() => {
    const toasterRootDiv = document.createElement('div')
    toasterRootDiv.setAttribute('id', 'toaster-root')
    refToasterRoot.current = toasterRootDiv

    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  /**
   * Insert `toaster-root` into DOM above `react-root` so when focus is reset (new page),
   * the first tabbable items will be the toasts.
   * Note: focus is not managed by this component.
   */
  useEffect(() => {
    const toasterDiv = refToasterRoot.current
    if (!toasterDiv) return

    const rootEl = document.querySelector(rootSelector)
    rootEl.parentElement.insertBefore(toasterDiv, rootEl)

    return () => toasterDiv.remove()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Externalizing state using reducer causes toastMap to stay actual between instances
  const [toastMap, dispatch] = useReducer(reducer, new Map())

  /**
   * Used internally to remove Toast on click or timeout
   */
  const handleRemoveToast = (key) => {
    if (isMounted.current) {
      dispatch({
        type: REMOVE_TOAST,
        key,
      })
    }
  }

  /**
   * Immediately show a Toast
   *
   * @param   {[string]}  title    Title will be bold text
   * @param   {[node]}    body     Usually a string, but can be any valid react node
   * @param   {[string]}  variant  See `Alert` component for variants. Defaults to info
   * @param   {[number]}  delay    Milliseconds to wait before showing
   *
   * @return  void
   */
  const showToast = ({ title, body, variant, delay = 0 }) => {
    const action = {
      type: ADD_TOAST,
      key: createRandomId(),
      toast: {
        title,
        variant,
        children: body,
      },
    }

    if (delay) {
      setTimeout(() => dispatch(action), delay)
    } else {
      dispatch(action)
    }
  }

  return (
    <ToasterContext.Provider value={{ showToast }}>
      <ToasterRootStyle />
      <ToastPortal
        refToasterRoot={refToasterRoot}
        toastMap={toastMap}
        onRemoveToast={handleRemoveToast}
      />
      {children}
    </ToasterContext.Provider>
  )
}

ToasterProvider.propTypes = {
  rootSelector: string,
  children: node,
}

ToasterProvider.defaultProps = {
  rootSelector: '#root',
}

/**
 * Helper component to show Toast from jsx
 * Same props as params for `showToast`
 */
const Toast = (props) => {
  const { showToast } = useContext(ToasterContext)
  useEffect(() => {
    showToast({ ...props })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}

export { ToasterProvider, ToasterContext, Toast }
