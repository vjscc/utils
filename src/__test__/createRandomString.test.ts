import { createRandomString } from '../random'

const times = 100

describe('Generate correct random string', () => {
  test('Return only includes letters and numbers', () => {
    const regexp = /^[a-zA-Z0-9]*$/
    for (let i = 0; i < times; i++) {
      const length = Math.round(Math.random() * 1000)
      const string = createRandomString(length)
      expect(regexp.test(string)).toBeTruthy()
    }
  })

  test('Return length-correct string', () => {
    for (let i = 0; i < times; i++) {
      const length = Math.round(Math.random() * 1000)
      const string = createRandomString(length)
      expect(string.length).toBe(length)
    }
  })
})
