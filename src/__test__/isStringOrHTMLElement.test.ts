import { isStringOrHTMLElement } from '../index'

describe('Return correct flag', () => {
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
