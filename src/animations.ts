import { anyFunction } from './functions'
import { createRAF } from './raf'
import { timingFunctionName, useTimingFunction } from './useTimingFunction'

const defalutDuration = 1.25 * 1000

// Basic animation functions options.
interface IAnimationFnOptions {
  duration?: number
  timingFunctionName?: timingFunctionName
  callback?: anyFunction
}

interface IFadeFnOptions extends IAnimationFnOptions {
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
export function fadeOut(el: HTMLElement, options: IFadeFnOptions = {}): void {
  const computedStyle = getComputedStyle(el)

  const {
    duration = defalutDuration,
    timingFunctionName = 'linear',
    callback,
    startOpacity = parseFloat(computedStyle.opacity),
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
      timingFunctionName,
      time > duration ? duration : time,
      startOpacity,
      0,
      duration
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
export function fadeIn(el: HTMLElement, options: IFadeFnOptions = {}): void {
  const computedStyle = getComputedStyle(el)

  const {
    duration = defalutDuration,
    timingFunctionName = 'linear',
    callback,
    startOpacity = parseFloat(computedStyle.opacity),
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
      timingFunctionName,
      time > duration ? duration : time,
      0,
      1,
      duration
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
