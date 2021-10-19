import { isSymbol } from '../index'

describe('Return correct flag', () => {
  test('Test symbol', () => {
    expect(isSymbol(Symbol())).toBeTruthy()
  })

  test('Test symbol object', () => {
    expect(isSymbol(new Object(Symbol()))).toBeTruthy()
  })
})
