import { createRandomInteger, createRandomString, createRandomStringWidthDivider } from '..'

const times = 100

describe('createRandomInteger', () => {
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

describe('createRandomString', () => {
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

describe('createRandomStringWidthDivider', () => {
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
    for (let i = 0; i < times; i++) {
      expect(createRandomStringWidthDivider().length).toBe(14)
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
