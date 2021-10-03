/**
 * Check if value is a HTML element.
 *
 * @param value The value to check.
 * @returns True if it is, false if it isn't.
 */
export function isHTMLElement(value: unknown): boolean {
  const assertValue = value as Record<string, unknown>
  return /^HTML\S*Element$/.test(assertValue?.constructor?.name) && assertValue?.nodeType === 1
}
/**
 * Convert file to base64 by FileReader.
 *
 * @param file File object.
 * @return Promise of result.
 */
export function getBase64(file: File): Promise<FileReader['result'] | ProgressEvent> {
  return new Promise((res, rej) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => res(reader.result)
    reader.onerror = error => rej(error)
  })
}
