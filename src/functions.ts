type Fn<T extends Array<unknown>, R> = (...args: T) => R
export type unknownFunction = Fn<unknown[], unknown>
export type noReturnFunction = Fn<unknown[], void>

export function debounce<T extends unknownFunction>(fn: T, delay: number): noReturnFunction {
  let timer: ReturnType<typeof setTimeout> | undefined
  return function (this: unknownFunction, ...args: unknown[]): void {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn.call(this, ...args), delay)
  }
}

export function throttle<T extends unknownFunction>(fn: T, delay: number): noReturnFunction {
  let timer: ReturnType<typeof setTimeout> | undefined
  let last: number | undefined
  return function (this: unknownFunction, ...args: unknown[]): void {
    const now = +new Date()
    if (last && now < last + delay) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => fn.call(this, ...args), delay)
    } else {
      last = now
      fn.call(this, ...args)
    }
  }
}
