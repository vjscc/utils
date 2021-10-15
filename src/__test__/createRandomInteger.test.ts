import { createRandomInteger } from '../index'

const times = 100

describe('Generate correct random integer', () => {
  test('Return is a integer', () => {
    for (let i = 0; i < times; i++) {
      const random = createRandomInteger(Math.random() * 1000)
      expect(random).toBe(parseInt(random.toString()))
    }
  })

  test('Return is in correct range', () => {
    for (let i = 0; i < times; i++) {
      const range = Math.random() * 1000
      const random = createRandomInteger(range)
      expect(random).toBeGreaterThanOrEqual(0)
      expect(random).toBeLessThanOrEqual(range)
    }
  })
})
