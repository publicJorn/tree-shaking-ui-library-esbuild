// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React from 'react'
import { arrayOf, node, oneOf, string } from 'prop-types'

import propTypeAction from './propTypeAction'
import { Actions, Container, Content, Title } from './index.styles'
import ActionButton from './ActionButton'

/**
 * Use `Alert` to provide local feedback, relative to another element.
 *
 * For global feedback, you may want to use a `Toaster`.
 */
const Alert = ({ title, children, actions, ...props }) => (
  <Container role="alert" {...props}>
    {title && title.length > 1 ? (
      <Title data-testid="title">{title}</Title>
    ) : null}

    <Content data-testid="content">{children}</Content>

    {actions.length ? <Actions>{actions}</Actions> : null}
  </Container>
)

Alert.propTypes = {
  children: node,
  title: string,
  variant: oneOf(['info', 'warning', 'success', 'error']),
  actions: arrayOf(propTypeAction),
}

Alert.defaultProps = {
  variant: 'info',
  actions: [],
}

Alert.ActionButton = ActionButton

export default Alert
