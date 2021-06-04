/**
 * Check if value is a HTML element.
 *
 * @param {*} value The value to check.
 * @returns {boolean} True if it is, false if it isn't.
 */
export const isHTMLElement = value =>
  /^HTML\S*Element$/.test(value?.constructor?.name) && value?.nodeType === 1

/**
 * Convert file to base64 by FileReader.
 *
 * @param {*} file File object.
 * @return {Promise<any>} Promise of result.
 */
export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
