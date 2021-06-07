// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import { arrayOf, shape, string, elementType } from 'prop-types'

const types = {
  LinkComponent: elementType.isRequired,
  pathname: string,
  mobileMoreText: string,
  items: arrayOf(
    shape({
      name: string.isRequired,
      Icon: elementType,
      to: string.isRequired,
    }),
  ).isRequired,
}

export default types
