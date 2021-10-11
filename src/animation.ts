import { anyFunction } from './functions'
import { createRAF } from './raf'

const defalutDuration = 1.25 * 1000

// Time functions type.
type timeFn = (t: number, b: number, c: number, d: number) => number

/**
 * Imitate `ease-in-out` fn
 *
 * @param t Current time.
 * @param b Total value.
 * @param c Target value.
 * @param d Total time.
 * @returns Value of current time.
 */
function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t + b
  }
  return (cc / 2) * ((t -= 2) * t * t + 2) + b
}

// Basic animation functions options.
interface IAnimationFnOptions {
  duration?: number
  timeFn?: timeFn
  callback?: anyFunction
}

/**
 * Let dom element fade out.
 *
 * @param el Dom element.
 * @param options Options.
 */
export function fadeOut(el: HTMLElement, options: IAnimationFnOptions = {}): void {
  const { duration = defalutDuration, timeFn = easeInOutCubic, callback } = options
  const startOpacity = parseFloat(getComputedStyle(el).opacity)
  const startTime = Date.now()
  function fade() {
    const now = Date.now()
    const time = now - startTime
    const nextOpacity = timeFn(time > duration ? duration : time, startOpacity, 0, duration)

    el.style.opacity = nextOpacity.toString()

    if (time < duration) {
      createRAF(fade)
    } else {
      if (callback) callback()
    }
  }
  createRAF(fade, 0)
}

interface IfadeInOptions extends IAnimationFnOptions {
  display?: string
  setDisplay?: (el: HTMLElement, display: string) => void
}

/**
 * Default way to set display.
 *
 * @param el DOM element.
 * @param display Display of element when show.
 */
function defaultSetDisplay(el: HTMLElement, display: string): void {
  el.style.display = display
}

/**
 * Let element fade in.
 *
 * @param el DOM element.
 * @param options Options.
 */
export function fadeIn(el: HTMLElement, options: IfadeInOptions = {}): void {
  const {
    duration = defalutDuration,
    timeFn = easeInOutCubic,
    callback,
    display = '',
    setDisplay = defaultSetDisplay
  } = options

  el.style.opacity = '0'
  setDisplay(el, display)
  const startTime = Date.now()
  function fade() {
    const now = Date.now()
    const time = now - startTime
    const nextOpacity = timeFn(time > duration ? duration : time, 0, 1, duration)
    el.style.opacity = nextOpacity.toString()
    if (time < duration) {
      createRAF(fade)
    } else {
      if (callback) callback()
    }
  }
  createRAF(fade, 0)
}
