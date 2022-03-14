import { fadeOut, fadeIn } from '../src'

const h1 = document.querySelector('h1') as HTMLElement

function _in() {
  fadeIn(h1, { duration: 5000, startDisplay: '' })
}
setTimeout(() => {
  fadeOut(h1, { duration: 1000, callback: _in })
}, 1000)
