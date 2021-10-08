import { convertNumberToMoney } from '../money'
import { createRandomInteger } from '../createRandom'
import { isString } from '../type'

const times = 100

describe('Generate correct money string with thousand mark', () => {
  test('Return string', () => {
    for (let i = 0; i < times; i++) {
      const negative = i % 3 ? 1 : -1
      const number = createRandomInteger(20000)
      let money: string | number = number * negative
      if (i % 2) {
        money = money.toString()
      }
      expect(isString(convertNumberToMoney(money))).toBeTruthy()
    }
  })
})
