import { createRandomStringWidthDivider } from '../random'

const times = 100

describe('Generate correct random string with divider', () => {
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

  test('Return correct string', () => {
    const format = 'xxxx-xxxxxxxx-x'
    const divider = '_'
    const regexp = /^[a-zA-Z0-9]{4}_[a-zA-Z0-9]{8}_[a-zA-Z0-9]{1}$/
    for (let i = 0; i < times; i++) {
      expect(regexp.test(createRandomStringWidthDivider(format, divider))).toBeTruthy()
    }
  })

  test('Throw error when pass wrong format', () => {
    const dividers = ['\\', '_', '^', '~']
    const formatSplits = [1, 2, 3, 7, 3, 4].map(length => new Array(length).fill('x'))
    for (let i = 0; i < times; i++) {
      const index = i % dividers.length
      const format = formatSplits.join(dividers[index])
      expect(() => createRandomStringWidthDivider(format)).toThrow()
    }
  })
})
