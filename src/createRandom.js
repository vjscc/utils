/**
 * Generator a random number in [0, range]
 * @param {number} range max number of random number, round down
 * @returns {number} random number
 */
export const createRandomInteger = range => Math.round(Math.random() * Math.floor(range))

/**
 * Generaotr random string
 * @param {number} length length of string
 * @returns {string} random string
 */
export function createRandomString(length) {
  const base = Array.from('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
  const baseLength = base.length
  let res = ''
  let i = length
  while (i) {
    i--
    const index = createRandomInteger(baseLength - 1)
    res += base[index]
  }

  return res
}
