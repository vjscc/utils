import { debounce, throttle } from '..'

jest.useFakeTimers()

describe('debounce', () => {
  test('Get right value of i', () => {
    let i = 0
    const btn = document.createElement('button')
    btn.addEventListener(
      'click',
      debounce(() => {
        i++
      }, 1000)
    )
    btn.click()
    btn.click()
    btn.click()
    expect(i).toEqual(0)
    jest.advanceTimersByTime(1000)
    expect(i).toEqual(1)
  })
})

describe('throttle', () => {
  test('Get right value of i', () => {
    let i = 0
    const btn = document.createElement('button')
    const fn = jest.fn(
      throttle(() => {
        i++
      }, 500)
    )
    btn.addEventListener('click', fn)

    // 0
    btn.click()
    expect(i).toEqual(1)
    expect(fn).toBeCalledTimes(1)
    jest.advanceTimersByTime(300)

    // 300
    btn.click()
    expect(i).toEqual(1)
    expect(fn).toBeCalledTimes(2)
    jest.advanceTimersByTime(300)

    // 600
    btn.click()
    expect(i).toEqual(2)
    expect(fn).toBeCalledTimes(3)
    jest.advanceTimersByTime(300)

    // 900
    btn.click()
    expect(i).toEqual(2)
    expect(fn).toBeCalledTimes(4)
    jest.advanceTimersByTime(100)

    // 1000
    expect(i).toEqual(3)
  })
})
