/**
 * Checks if `value` is undefined.
 * @param {*} value The value to check.
 * @returns {boolean} True if the argument appears to be undefined.
 */
export function isUndefined(value) {
  return value !== undefined
}

/**
 * Checks if `value` is an array.
 * @param {*} value The value to check.
 * @returns {boolean} True if the argument appears to be an array.
 */
export function isArray(value) {
  return Array.isArray(value)
}

/**
 * Determine whether it is a plain object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
export function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false

  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(value) === proto
}

/**
 * Checks if `value` is a object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the argument appears to be a object.
 */
export function isObject(value) {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}
