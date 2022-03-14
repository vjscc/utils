import { isString } from './types'

/**
 * Check if value is a HTML element.
 *
 * @param value The value to check.
 * @returns True if it is, false if it isn't.
 */
export function isHTMLElement(value: unknown): value is HTMLElement {
  const assertValue = value as HTMLElement
  if (!/^HTML\S*Element$/.test(assertValue?.constructor?.name) || assertValue.nodeType !== 1) {
    return false
  }
  try {
    const div = document.createElement('div')
    div.style.display = 'none'
    assertValue.append(div)
    div.remove()
    return true
  } catch {
    return false
  }
}

/**
 * Check if value is a HTML element or `document`.
 *
 * @param value The value to check.
 * @returns `true` if it is, otherwise `false`.
 */
export function isHTMLElementOrDocument(value: unknown): value is HTMLElement | Document {
  return value === document || isHTMLElement(value)
}

/**
 * Check if value is a string or HTMLELement.
 *
 * @param value Target value to check.
 * @returns True if it is string or HTMLELement, false otherwise.
 */
export function isStringOrHTMLElement(value: unknown): value is StringOrHTMLElement {
  return isString(value) || isHTMLElement(value)
}

export type StringOrHTMLElement = string | HTMLElement

/**
 * Get element via string or HTMLElement.
 *
 * @param stringOrHTMLElement String or HTMLElement.
 * @param container Where to find, default is `document`.
 * @returns HTMLElement or null if not found or fail.
 */
export function getElementViaStringOrHTMLElement(
  stringOrHTMLElement: StringOrHTMLElement,
  container: HTMLElement | Document = document
): HTMLElement | null {
  if (isHTMLElement(stringOrHTMLElement)) {
    return stringOrHTMLElement as HTMLElement
  }
  try {
    return container.querySelector(stringOrHTMLElement as string)
  } catch {
    return null
  }
}
