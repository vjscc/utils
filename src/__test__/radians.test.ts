import { PI, radians } from '../index'

test('Retrun correct value', () => {
  expect(radians(180)).toEqual(PI)
  expect(radians(90)).toEqual(PI * 0.5)
  expect(radians(0)).toEqual(0)
})
