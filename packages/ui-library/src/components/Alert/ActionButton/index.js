// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//

import React from 'react'
import { func } from 'prop-types'
import Button from '../../Button'

const ActionButton = (props) => {
  const type = props.onClick ? { type: 'button' } : {}
  return <Button size="small" variant="link" {...type} {...props} />
}

ActionButton.propTypes = {
  onClick: func,
}

export default ActionButton
