// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import defaultTheme from './default'
import darkTheme from './dark'

function isObj(obj) {
  return typeof obj === 'object' && obj !== null
}

function getUndefinedKeys(obj) {
  return Object.entries(obj).reduce((keys, [key, val]) => {
    if (isObj(val)) return keys.concat(getUndefinedKeys(val))
    if (val === undefined) return keys.concat(key)
    return keys
  }, [])
}

test('default theme should not have undefined properties', () => {
  expect(getUndefinedKeys(defaultTheme)).toHaveLength(0)
})

test('dark theme should not have undefined properties', () => {
  expect(getUndefinedKeys(darkTheme)).toHaveLength(0)
})
