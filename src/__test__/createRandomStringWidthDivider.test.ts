import { createRandomStringWidthDivider } from '../createRandom'
import { isString } from '../type'

const times = 100

describe('Generate correct random string with divider', () => {
  test('Return is a string', () => {
    for (let i = 0; i < times; i++) {
      expect(isString(createRandomStringWidthDivider())).toBeTruthy()
    }
  })

  test('Return only includes letters and numbers and divider', () => {
    const format = 'xxxx-xxx-xxxxx-xxxxxxxx-x'
    const regexp = /^[a-zA-Z0-9\-^_\\/]+$/
    const dividers = ['-', '^', '_', '\\', '/']
    const { length } = dividers
    for (let i = 0; i < times; i++) {
      const index = i % length
      const divider = dividers[index]
      const string = createRandomStringWidthDivider(format, divider)
      expect(regexp.test(string)).toBeTruthy()
    }
  })

  test('Return length-correct string', () => {
    const format = 'xxxx-xxx-xxxxx-xxxxxxxx-x'
    for (let i = 0; i < times; i++) {
      expect(createRandomStringWidthDivider(format).length).toBe(format.length)
    }
  })
})
