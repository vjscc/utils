import { isPlainObject } from '../index'

describe('Return correct flag', () => {
  test('Test plain objects', () => {
    expect(isPlainObject({})).toBeTruthy()
    expect(isPlainObject(new Object())).toBeTruthy()
  })

  test('Test others', () => {
    class X {
      x: number
      constructor(x: number) {
        this.x = x
      }
    }
    expect(isPlainObject(new X(0))).toBeFalsy()
    expect(isPlainObject(new Date())).toBeFalsy()
    expect(isPlainObject(() => void 0)).toBeFalsy()
    expect(isPlainObject(0)).toBeFalsy()
  })
})
