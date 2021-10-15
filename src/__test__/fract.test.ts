import { abs, fract } from '../index'

test('Retrun correct value', () => {
  expect(fract(0.333)).toEqual(0.333)
  expect(fract(-10.5)).toEqual(0.5)
  expect(fract(321)).toEqual(0)
  expect(abs(fract(1.222001e3) - 0.001)).toBeLessThanOrEqual(0.00001)
})
