import { getElementViaStringOrHTMLElement } from '../dom'

describe('Return correct element or null if not found', () => {
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
