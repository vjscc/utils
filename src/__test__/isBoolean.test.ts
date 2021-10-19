import { isBoolean } from '../index'

describe('Return correct flag', () => {
  test('Test boolean', () => {
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean(false)).toBeTruthy()
  })

  test('Test familiar truthy or falsy value', () => {
    expect(isBoolean(0)).toBeFalsy()
    expect(isBoolean('')).toBeFalsy()
    expect(isBoolean(undefined)).toBeFalsy()
    expect(isBoolean(null)).toBeFalsy()
    expect(isBoolean(1)).toBeFalsy()
    expect(isBoolean({})).toBeFalsy()
  })
})
