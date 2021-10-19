import { isFunction } from '../index'

describe('Return correct flag', () => {
  test('Test array', () => {
    function log(x: unknown) {
      console.log(x)
    }
    const dir = (x: unknown) => console.dir(x)
    expect(isFunction(setTimeout)).toBeTruthy()
    expect(isFunction(log)).toBeTruthy()
    expect(isFunction(dir)).toBeTruthy()
  })
})
