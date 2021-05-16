// Copyright © VNG Realisatie 2021
// Licensed under the EUPL
//
import * as designSystem from './index'

test('exposed design system parts', () => {
  const keys = Object.keys(designSystem)
  expect(keys).toMatchSnapshot()
})
