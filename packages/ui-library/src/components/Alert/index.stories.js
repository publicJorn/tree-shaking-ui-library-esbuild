// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { MemoryRouter, Link } from 'react-router-dom'
import Icon from '../Icon'
import { ReactComponent as IconCheck } from './check.svg'
import Alert from './index'

const alertStory = {
  title: 'Components/Alert',
  parameters: {
    componentSubtitle: 'Localised notifications',
  },
  component: Alert,
}

export default alertStory

export const allAlerts = () => (
  <>
    <Alert title="Info (default)" variant="info">
      Info message
    </Alert>
    <br />
    <Alert title="Success" variant="success">
      Success message
    </Alert>
    <br />
    <Alert title="Warning" variant="warning">
      Warning message
    </Alert>
    <br />
    <Alert title="Error" variant="error">
      Error message
    </Alert>
  </>
)

export const info = () => (
  <Alert variant="info" title="Title">
    Content
  </Alert>
)

export const success = () => (
  <Alert variant="success" title="Title">
    Content
  </Alert>
)

export const warning = () => (
  <Alert variant="warning" title="Title">
    Content
  </Alert>
)

export const error = () => (
  <Alert variant="error" title="Title">
    Content
  </Alert>
)

export const withActions = () => {
  const handleOnClick = () =>
    window.confirm('The alert message has been confirmed')

  const actions = [
    <Alert.ActionButton key="button-action" onClick={handleOnClick}>
      <Icon as={IconCheck} inline /> Confirm
    </Alert.ActionButton>,
    <Alert.ActionButton key="anchor-action" as="a" href="https://nlx.io">
      NLX.io
    </Alert.ActionButton>,
    <Alert.ActionButton key="link-action" as={Link} to="/home">
      Internal route
    </Alert.ActionButton>,
  ]

  return (
    <MemoryRouter>
      <Alert title="Title" actions={actions}>
        Content
      </Alert>
    </MemoryRouter>
  )
}
