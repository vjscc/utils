/**
 * Generator a random number in [0, range].
 *
 * @param range Max number of random number, round down.
 * @returns Random integer.
 */
export function createRandomInteger(range: number): number {
  return Math.round(Math.random() * Math.floor(range))
}

/**
 * Generaotr random string.
 *
 * @param length Length of string.
 * @returns Random string.
 */
export function createRandomString(length: number): string {
  const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let res = ''
  let i = length
  while (i--) res += base[createRandomInteger(base.length - 1)]

  return res
}

/**
 * Generaotr random string with dividers.
 *
 * @param format Format of string.
 * @param divdier Divider of string chunks.
 * @returns Random String with dividers.
 */
export function createRandomStringWidthDivider(format = 'xxxx-xxxx-xxxx', divdier = '-'): string {
  if (!/^x+(-x+)*$/.test(format))
    throw new SyntaxError(
      `Format only support char 'x' as placeholder, '-' as divider, and must start and end with 'x', Like: 'xxxx-xxxx-xxxx'.`
    )

  let res = ''
  const chunks = format.split('-')

  chunks.forEach(
    (chunk, index) =>
      (res += createRandomString(chunk.length) + (index === chunks.length - 1 ? '' : divdier))
  )

  return res
}
