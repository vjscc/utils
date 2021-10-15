import { fadeOut, fadeIn } from '../src/animations'

const h1 = document.querySelector('h1')
if (!h1) {
  throw new Error('fuck')
}

function _in() {
  fadeIn(h1 as HTMLElement, { duration: 5000 })
}

if (h1) {
  setTimeout(() => {
    fadeOut(h1, { duration: 1000, callback: _in })
  }, 1000)
}
