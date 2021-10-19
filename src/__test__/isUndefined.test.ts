import { isUndefined } from '../index'

describe('Return correct flag', () => {
  test('Undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function a() {}
    expect(isUndefined(a())).toBeTruthy()
    expect(isUndefined(undefined)).toBeTruthy()
    expect(isUndefined(void 0)).toBeTruthy()
  })

  test('Falsy values is not undefined', () => {
    expect(isUndefined(null)).toBeFalsy()
    expect(isUndefined(NaN)).toBeFalsy()
    expect(isUndefined('')).toBeFalsy()
  })
})
