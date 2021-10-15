import { isHTMLElementOrDocument } from '../index'

describe('Return correct flag', () => {
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
