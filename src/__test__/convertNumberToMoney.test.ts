import { convertNumberToMoney } from '../index'

describe('Generate correct money string with thousand mark', () => {
  test('Pass illegal string as first argument', () => {
    expect(() => convertNumberToMoney('')).toThrow()
    expect(() => convertNumberToMoney('true')).toThrow()
    expect(() => convertNumberToMoney('false')).toThrow()
    expect(() => convertNumberToMoney('asdfqwerf')).toThrow()
    expect(() => convertNumberToMoney('123.123{asdf)')).toThrow()
  })

  test('Pass NaN as first argument', () => {
    expect(() => convertNumberToMoney(NaN)).toThrow()
    expect(() => convertNumberToMoney('NaN')).toThrow()
  })

  test('Pass Infinity as first argument', () => {
    expect(() => convertNumberToMoney(Infinity)).toThrow()
    expect(() => convertNumberToMoney('Infinity')).toThrow()
  })

  test('Pass number equal or less than 0 as first argument', () => {
    expect(() => convertNumberToMoney(0)).toThrow()
    expect(() => convertNumberToMoney(-1)).toThrow()
    expect(() => convertNumberToMoney(-100e2)).toThrow()
    expect(() => convertNumberToMoney(-Infinity)).toThrow()
    expect(() => convertNumberToMoney('0')).toThrow()
    expect(() => convertNumberToMoney('-1')).toThrow()
    expect(() => convertNumberToMoney('-333e7')).toThrow()
    expect(() => convertNumberToMoney('-Infinity')).toThrow()
  })

  test('Pass illegal number as second argument', () => {
    expect(() => convertNumberToMoney(1000, -1)).toThrow()
    expect(() => convertNumberToMoney(1000, 30)).toThrow()
    expect(() => convertNumberToMoney(1000, 10.5)).toThrow()
  })

  test('Return correct format', () => {
    const regexp = /^\d{1,3}(,\d{3})*\.\d{0,20}$/
    expect(regexp.test(convertNumberToMoney(1000))).toBeTruthy()
    expect(regexp.test(convertNumberToMoney(1e12))).toBeTruthy()
    expect(regexp.test(convertNumberToMoney('1000'))).toBeTruthy()
    expect(regexp.test(convertNumberToMoney('1e12'))).toBeTruthy()
  })
})
