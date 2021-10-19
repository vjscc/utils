import { isObject } from '../index'

describe('Return correct flag', () => {
  test('Test objects', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject(Math)).toBeTruthy()
    expect(isObject(Date)).toBeTruthy()
    expect(isObject(new String())).toBeTruthy()
    expect(isObject(new Number())).toBeTruthy()
  })

  test('Test functions', () => {
    expect(isObject(setTimeout)).toBeTruthy()
    expect(isObject(requestAnimationFrame)).toBeTruthy()
  })
})
