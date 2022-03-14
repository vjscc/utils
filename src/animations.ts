import { AnyFunction } from './functions'
import { createRAF } from './raf'
import { useTimingFunction, TimingFunction } from './useTimingFunction'

const defalutDuration = 2 * 1000

// Basic animation functions options.
export type AnimationFnOptions = {
  duration?: number
  timingFunction?: TimingFunction
  callback?: AnyFunction
}

export type FadeFnOptions = AnimationFnOptions & {
  startOpacity?: number
  startDisplay?: string
  endOpacity?: number
  endDisplay?: string
}

/**
 * Let dom element fade out.
 *
 * @param el Dom element.
 * @param options Options.
 */
export function fadeOut(el: HTMLElement, options: FadeFnOptions = {}): void {
  const computedStyle = getComputedStyle(el)

  const {
    duration = defalutDuration,
    timingFunction,
    callback,
    startOpacity = computedStyle.opacity ? parseFloat(computedStyle.opacity) : 1,
    startDisplay = computedStyle.display,
    endOpacity = 0,
    endDisplay = 'none'
  } = options

  el.style.opacity = startOpacity.toString()
  el.style.display = startDisplay

  const startTime = Date.now()

  function fade() {
    const now = Date.now()
    const time = now - startTime
    const nextOpacity = useTimingFunction(
      Math.min(time, duration),
      duration,
      startOpacity,
      endOpacity,
      timingFunction
    )

    el.style.opacity = nextOpacity.toString()

    if (time < duration) {
      createRAF(fade)
    } else {
      el.style.opacity = endOpacity.toString()
      el.style.display = endDisplay

      if (callback) callback()
    }
  }
  createRAF(fade, 0)
}

/**
 * Let element fade in.
 *
 * @param el DOM element.
 * @param options Options.
 */
export function fadeIn(el: HTMLElement, options: FadeFnOptions = {}): void {
  const computedStyle = getComputedStyle(el)

  const {
    duration = defalutDuration,
    timingFunction,
    callback,
    startOpacity = computedStyle.opacity ? parseFloat(computedStyle.opacity) : 0,
    startDisplay = computedStyle.display,
    endOpacity = 1,
    endDisplay = ''
  } = options

  el.style.opacity = startOpacity.toString()
  el.style.display = startDisplay

  const startTime = Date.now()

  function fade() {
    const now = Date.now()
    const time = now - startTime
    const nextOpacity = useTimingFunction(
      Math.min(time, duration),
      duration,
      startOpacity,
      endOpacity,
      timingFunction
    )

    el.style.opacity = nextOpacity.toString()
    if (time < duration) {
      createRAF(fade)
    } else {
      el.style.opacity = endOpacity.toString()
      el.style.display = endDisplay

      if (callback) callback()
    }
  }
  createRAF(fade, 0)
}
