import { clamp } from '../index'

test('Retrun correct value', () => {
  expect(clamp(0, -1, 10)).toEqual(0)
  expect(clamp(100, -1e10, 10)).toEqual(10)
  expect(clamp(321, 33, 50)).toEqual(50)
  expect(clamp(-1e30, -1e2, 500)).toEqual(-100)
})
