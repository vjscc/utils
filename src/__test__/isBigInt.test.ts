import { isBigInt } from '../index'

describe('Return correct flag', () => {
  test('Test bigint', () => {
    expect(isBigInt(BigInt(0))).toBeTruthy()
  })
})
