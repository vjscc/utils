import {
  getElementViaStringOrHTMLElement,
  isHTMLElementOrDocument,
  isHTMLElement,
  isStringOrHTMLElement
} from '..'

describe('isHTMLElement', () => {
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

  test('Test object instace of class whose name includes HTML and Element', () => {
    class HTMLCustomElement {
      nodeType: number
      constructor(nodeType: number) {
        this.nodeType = nodeType || 1
      }
    }

    expect(isHTMLElement(new HTMLCustomElement(1))).toBeFalsy()
  })

  test('Test div', () => {
    const div = document.createElement('div')
    expect(isHTMLElement(div)).toBeTruthy()
  })

  test('Test document', () => {
    expect(isHTMLElement(document)).toBeFalsy()
  })

  test('Test documentElement', () => {
    expect(isHTMLElement(document.documentElement)).toBeTruthy()
  })
})

describe('isHTMLElementOrDocument', () => {
  test('Test div', () => {
    const div = document.createElement('div')
    expect(isHTMLElementOrDocument(div)).toBeTruthy()
  })

  test('Test document', () => {
    expect(isHTMLElementOrDocument(document)).toBeTruthy()
  })

  test('Test documentElement', () => {
    expect(isHTMLElementOrDocument(document.documentElement)).toBeTruthy()
  })
})

describe('getElementViaStringOrHTMLElement', () => {
  test('Test strings', () => {
    const div = document.createElement('div')
    div.classList.add('container')
    document.body.append(div)

    // Correct CSS selector.
    expect(getElementViaStringOrHTMLElement('.container', document.body)).toEqual(div)

    // Wrong but valid CSS selector.
    expect(getElementViaStringOrHTMLElement('.main')).toBeNull()

    // Invalid CSS selector.
    expect(getElementViaStringOrHTMLElement('^%$')).toBeNull()
  })

  test('Test elements', () => {
    const div = document.createElement('div')

    expect(getElementViaStringOrHTMLElement(div)).toEqual(div)
    expect(getElementViaStringOrHTMLElement(document.documentElement)).toEqual(
      document.documentElement
    )
  })
})

describe('isStringOrHTMLElement', () => {
  test('Test string', () => {
    expect(isStringOrHTMLElement('')).toBeTruthy()
    expect(isStringOrHTMLElement('html body')).toBeTruthy()
    expect(isStringOrHTMLElement(new String('html body .dark'))).toBeTruthy()
  })

  test('Test document', () => {
    expect(isStringOrHTMLElement(document)).toBeFalsy()
  })

  test('Test htmlElement', () => {
    const div = document.createElement('div')
    expect(isStringOrHTMLElement(div)).toBeTruthy()
    expect(isStringOrHTMLElement(document.documentElement)).toBeTruthy()
  })
})
