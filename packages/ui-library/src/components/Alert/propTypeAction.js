// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import ActionButton from './ActionButton'

const propTypeAction = (components, key, componentName) => {
  let error = ''

  components.some((component) => {
    if (component.type.name !== ActionButton.name) {
      const givenType =
        typeof component.type === 'string'
          ? component.type
          : component.type.name || 'unknown'

      error = `Invalid component \`${givenType}\` passed to prop \`actions\` in \`${componentName}\`. Only \`Alert.ActionButton\` is allowed.`
      return true
    }

    return false
  })

  if (error) return new Error(error)
}

export default propTypeAction
