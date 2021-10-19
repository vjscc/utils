import { isString } from '../index'

describe('Return correct flag', () => {
  test('Test string', () => {
    expect(isString('')).toBeTruthy()
    expect(isString('12345')).toBeTruthy()
    expect(isString('abcdefg')).toBeTruthy()
  })

  test('Test string object', () => {
    expect(isString(new String('asdf'))).toBeTruthy()
    expect(isString(new String())).toBeTruthy()
  })
})
