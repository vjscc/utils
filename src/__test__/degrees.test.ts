import { PI, degrees } from '../index'

test('Retrun correct value', () => {
  expect(degrees(PI)).toEqual(180)
  expect(degrees(PI * 0.5)).toEqual(90)
  expect(degrees(0)).toEqual(0)
})
