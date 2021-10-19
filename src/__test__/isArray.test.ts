import { isArray } from '../index'

describe('Return correct flag', () => {
  test('Test array', () => {
    expect(isArray([])).toBeTruthy()
    // eslint-disable-next-line no-sparse-arrays
    expect(isArray([, , 1])).toBeTruthy()
    expect(isArray(new Array(10))).toBeTruthy()
  })
})
