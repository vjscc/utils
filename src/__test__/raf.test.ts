import { createRAF, cancelRAF } from '..'

describe('Get right status', () => {
  const requestAnimationFrameSpy = jest
    .spyOn(window, 'requestAnimationFrame')
    .mockImplementation(cb => {
      cb(Date.now())
      return Math.random()
    })
  test('Call once', () => {
    const callback = jest.fn()
    createRAF(callback)
    expect(callback).toBeCalledTimes(1)
    expect(requestAnimationFrameSpy).toBeCalledTimes(1)
    requestAnimationFrameSpy.mockRestore()
  })
  test('Cancel raf', () => {
    const callback = jest.fn()
    const id = createRAF(callback)
    cancelRAF(id)
    expect(callback).toBeCalledTimes(0)
    requestAnimationFrameSpy.mockRestore()
  })
})
