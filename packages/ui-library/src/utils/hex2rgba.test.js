// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import hex2rgba from './hex2rgba'

test('renders expected rgba string', () => {
  expect(hex2rgba('#000')).toEqual('rgba(0,0,0,1)')
  expect(hex2rgba('#ffffff', 0.5)).toEqual('rgba(255,255,255,0.5)')
})
