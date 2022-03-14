import { fadeIn, fadeOut } from '..'

jest.useFakeTimers()

describe('fadeOut', () => {
  test('Get right style', () => {
    const div = document.createElement('div')
    document.body.append(div)
    const fn = jest.fn(() => void 0)
    fadeOut(div, {
      callback: fn
    })

    expect(div.style.opacity).toEqual('1')
    expect(div.style.display).toEqual('block')

    jest.advanceTimersByTime(500)
    expect(Number(div.style.opacity)).toBeCloseTo(0.75, 2)

    jest.advanceTimersByTime(500)
    expect(Number(div.style.opacity)).toBeCloseTo(0.5, 2)

    jest.advanceTimersByTime(1000)
    expect(div.style.opacity).toEqual('0')
    expect(div.style.display).toEqual('none')
    expect(fn).toBeCalledTimes(1)
  })
})

describe('fadeIn', () => {
  test('Get right style', () => {
    const div = document.createElement('div')
    div.style.display = 'none'
    div.style.opacity = '0'
    const fn = jest.fn(() => void 0)
    fadeIn(div, {
      callback: fn
    })

    expect(div.style.opacity).toEqual('0')
    expect(div.style.display).toEqual('none')

    jest.advanceTimersByTime(500)
    expect(Number(div.style.opacity)).toBeCloseTo(0.25, 2)

    jest.advanceTimersByTime(500)
    expect(Number(div.style.opacity)).toBeCloseTo(0.5, 2)

    jest.advanceTimersByTime(1100)
    expect(div.style.opacity).toEqual('1')
    expect(div.style.display).toEqual('')
    expect(fn).toBeCalledTimes(1)
  })
})
