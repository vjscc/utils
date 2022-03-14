import { isWindow } from '..'

describe('isWindow', () => {
  test('Test window', () => {
    expect(isWindow(window)).toBeTruthy()
    expect(isWindow(window.window)).toBeTruthy()
  })

  test('Test not window', () => {
    expect(isWindow(undefined)).toBeFalsy()
    expect(isWindow(null)).toBeFalsy()
    expect(isWindow(document)).toBeFalsy()
  })
})
