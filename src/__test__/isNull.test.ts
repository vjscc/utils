import { isNull } from '../index'

describe('Return correct flag', () => {
  test('Test null', () => {
    expect(isNull(null)).toBeTruthy()
  })

  test('Not null', () => {
    expect(isNull(undefined)).toBeFalsy()
    expect(isNull({})).toBeFalsy()
  })
})
