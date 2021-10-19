import { isNumber } from '../index'

describe('Return correct flag', () => {
  test('Test number', () => {
    expect(isNumber(0)).toBeTruthy()
    expect(isNumber(0xfff)).toBeTruthy()
    expect(isNumber(NaN)).toBeTruthy()
    expect(isNumber(Infinity)).toBeTruthy()
  })

  test('Test number object', () => {
    expect(isNumber(new Number())).toBeTruthy()
    expect(isNumber(new Number(NaN))).toBeTruthy()
  })
})
