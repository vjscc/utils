// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any

/**
 * Get function with debounce.
 *
 * @param fn Function need to be debounce.
 * @param delay Delay time before excuting.
 * @returns Function with debounce.
 */
export function debounce<T extends AnyFunction>(
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
export function throttle<T extends AnyFunction>(
  fn: T,
  interval: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | undefined
  let last = 0
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!timer) {
      const now = Date.now()
      if (now > last + interval) {
        last = now
        fn.call(this, ...args)
      } else {
        timer = setTimeout(() => {
          last = Date.now()
          fn.call(this, ...args)
          clearTimeout(timer as ReturnType<typeof setTimeout>)
          timer = undefined
        }, last + interval - now)
      }
    }
  }
}
