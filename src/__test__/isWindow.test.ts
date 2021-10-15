import { isWindow } from '../index'

describe('Return correct flag', () => {
  test('Test window', () => {
    expect(isWindow(window)).toBeTruthy()
    expect(isWindow(window.window)).toBeTruthy()
  })

  test('Not window', () => {
    expect(isWindow(undefined)).toBeFalsy()
    expect(isWindow(null)).toBeFalsy()
    expect(isWindow(document)).toBeFalsy()
  })
})
