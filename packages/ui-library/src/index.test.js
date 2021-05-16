import * as designSystem from './index'

test('exposed design system parts', () => {
  const keys = Object.keys(designSystem)
  expect(keys).toMatchSnapshot()
})
