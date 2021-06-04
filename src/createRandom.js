/**
 * Generator a random number in [0, range].
 *
 * @param {number} range Max number of random number, round down.
 * @returns {number} Random integer.
 */
export const createRandomInteger = range => Math.round(Math.random() * Math.floor(range))

/**
 * Generaotr random string.
 *
 * @param {number} length Length of string.
 * @returns {string} Random string.
 */
export function createRandomString(length) {
  const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let res = ''
  let i = length
  while (i--) res += base[createRandomInteger(base.length - 1)]

  return res
}

/**
 * Generaotr random string with dividers.
 *
 * @param {string} format Format of string.
 * @param {string} divdier Divider of string chunks.
 * @returns {string} Random String with dividers.
 */
export function createRandomStringWidthDivider(format = 'xxxx-xxxx-xxxx', divdier = '-') {
  if (!/^x+(-x+)*$/.test(format))
    throw new SyntaxError(
      `Format only support char 'x' as placeholder, '-' as divider,
       and must start and end with 'x', Like: 'xxxx-xxxx-xxxx'.`
    )

  let res = ''
  const chunks = format.split('-')

  chunks.forEach(
    (chunk, index) =>
      (res += createRandomString(chunk.length) + (index === chunks.length - 1 ? '' : divdier))
  )

  return res
}
