/**
 * Check if value is a HTML element.
 *
 * @param value The value to check.
 * @returns True if it is, false if it isn't.
 */
export function isHTMLElement(value: unknown): boolean {
  const assertValue = value as Record<string, unknown>
  return /^HTML\S*Element$/.test(assertValue?.constructor?.name) && assertValue.nodeType === 1
}
