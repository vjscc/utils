// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type anyFunction = (...args: any[]) => any

/**
 * Get function with debounce.
 *
 * @param fn Function need to be debounce.
 * @param delay Delay time before excuting.
 * @returns Function with debounce.
 */
export function debounce<T extends anyFunction>(
  fn: T,
  delay: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | undefined
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn.call(this, ...args), delay)
  }
}

/**
 * Get function with throttle.
 *
 * @param fn Function need to be throttle.
 * @param interval Interval time before each excuting.
 * @returns Function with throttle.
 */
export function throttle<T extends anyFunction>(
  fn: T,
  interval: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | undefined
  let last: number | undefined
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = +new Date()
    if (last && now < last + interval) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => fn.call(this, ...args), interval)
    } else {
      last = now
      fn.call(this, ...args)
    }
  }
}
