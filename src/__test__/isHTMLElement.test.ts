import { isHTMLElement } from '../dom'

describe('Generate correct random string with divider', () => {
  test('Test basic types', () => {
    expect(isHTMLElement(undefined)).toBeFalsy()
    expect(isHTMLElement(null)).toBeFalsy()
    expect(isHTMLElement('')).toBeFalsy()
    expect(isHTMLElement('asdf123')).toBeFalsy()
    expect(isHTMLElement(5616749103)).toBeFalsy()
    expect(isHTMLElement(NaN)).toBeFalsy()
    expect(isHTMLElement(Infinity)).toBeFalsy()
    expect(isHTMLElement(true)).toBeFalsy()
    expect(isHTMLElement(false)).toBeFalsy()
  })

  test('Test non-dom object', () => {
    expect(isHTMLElement([])).toBeFalsy()
    expect(isHTMLElement({})).toBeFalsy()
    expect(isHTMLElement(() => void 0)).toBeFalsy()
  })

  test('Test non-dom object with nodeType property', () => {
    expect(isHTMLElement({ nodeType: 2 })).toBeFalsy()
    expect(isHTMLElement({ nodeType: 1 })).toBeFalsy()
  })

  test('Test div', () => {
    const div = document.createElement('div')
    expect(isHTMLElement(div)).toBeTruthy()
  })
})
