import { isString } from './types'

/**
 * Convert number to money with thousand mark.
 *
 * @param number Money number.
 * @param fractionDigits Decimal digits.
 * @return Money with thousand mark.
 */
export function convertNumberToMoney(number: number | string, fractionDigits = 2): string {
  const isStringArg = isString(number)

  // Support decimals and scientific notation.
  const regexp = /^\d+(\.\d+)?(e\d+)?$/
  if (isStringArg && !regexp.test(number as string)) {
    throw new SyntaxError(`The first argument must be legal number, but got ${number}`)
  }

  const num = isStringArg ? parseFloat(number as string) : (number as number)

  // number is not be NaN, Infinity and should be positive.
  if (isNaN(num)) {
    throw new TypeError(`The first argument must be legal number, but got 'NaN'.`)
  }
  if (!isFinite(num)) {
    throw new TypeError(`The first argument must be legal number, but got 'Infinity'.`)
  }
  if (num <= 0) {
    throw new TypeError(`The first argument must be a positive number.`)
  }

  // `fractionDigits` should be 0~20 integer.
  if (fractionDigits < 0 || fractionDigits > 20 || !Number.isInteger(fractionDigits)) {
    throw new TypeError(`The second argument must be a integer and in range [0, 20].`)
  }

  const float = num.toFixed(fractionDigits)
  const [intPart, floatPart] = float.split('.')
  const intPartArray = Array.from(intPart)

  let i = intPartArray.length
  let parsedInt = ''

  while (i--) {
    const { length } = intPartArray

    if ((length - i) % 3 === 0 && length > 3) {
      parsedInt = `,${intPartArray.splice(i, 3).join('')}${parsedInt}`
    }
    if (!i) {
      parsedInt = `${intPartArray.join('')}${parsedInt}`
    }
  }

  return `${parsedInt}.${floatPart}`
}
