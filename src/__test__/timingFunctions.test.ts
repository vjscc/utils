import { timingFunctionMap } from '../useTimingFunction'

const {
  linear,
  swing,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce
} = timingFunctionMap

describe('Return correct values', () => {
  test('Test linear', () => {
    expect(linear(0)).toEqual(0)
    expect(linear(0.25)).toEqual(0.25)
    expect(linear(0.5)).toEqual(0.5)
    expect(linear(0.75)).toEqual(0.75)
    expect(linear(1)).toEqual(1)
  })
  test('Test swing', () => {
    expect(swing(0)).toEqual(0)
    expect(swing(0.25)).toEqual(0.1464466094067262)
    expect(swing(0.5)).toEqual(0.49999999999999994)
    expect(swing(0.75)).toEqual(0.8535533905932737)
    expect(swing(1)).toEqual(1)
  })
  test('Test easeInQuad', () => {
    expect(easeInQuad(0)).toEqual(0)
    expect(easeInQuad(0.25)).toEqual(0.0625)
    expect(easeInQuad(0.5)).toEqual(0.25)
    expect(easeInQuad(0.75)).toEqual(0.5625)
    expect(easeInQuad(1)).toEqual(1)
  })
  test('Test easeOutQuad', () => {
    expect(easeOutQuad(0)).toEqual(0)
    expect(easeOutQuad(0.25)).toEqual(0.4375)
    expect(easeOutQuad(0.5)).toEqual(0.75)
    expect(easeOutQuad(0.75)).toEqual(0.9375)
    expect(easeOutQuad(1)).toEqual(1)
  })
  test('Test easeInOutQuad', () => {
    expect(easeInOutQuad(0)).toEqual(0)
    expect(easeInOutQuad(0.25)).toEqual(0.125)
    expect(easeInOutQuad(0.5)).toEqual(0.5)
    expect(easeInOutQuad(0.75)).toEqual(0.875)
    expect(easeInOutQuad(1)).toEqual(1)
  })
  test('Test easeInCubic', () => {
    expect(easeInCubic(0)).toEqual(0)
    expect(easeInCubic(0.25)).toEqual(0.015625)
    expect(easeInCubic(0.5)).toEqual(0.125)
    expect(easeInCubic(0.75)).toEqual(0.421875)
    expect(easeInCubic(1)).toEqual(1)
  })
  test('Test easeOutCubic', () => {
    expect(easeOutCubic(0)).toEqual(0)
    expect(easeOutCubic(0.25)).toEqual(0.578125)
    expect(easeOutCubic(0.5)).toEqual(0.875)
    expect(easeOutCubic(0.75)).toEqual(0.984375)
    expect(easeOutCubic(1)).toEqual(1)
  })
  test('Test easeInOutCubic', () => {
    expect(easeInOutCubic(0)).toEqual(0)
    expect(easeInOutCubic(0.25)).toEqual(0.0625)
    expect(easeInOutCubic(0.5)).toEqual(0.5)
    expect(easeInOutCubic(0.75)).toEqual(0.9375)
    expect(easeInOutCubic(1)).toEqual(1)
  })
  test('Test easeInQuart', () => {
    expect(easeInQuart(0)).toEqual(0)
    expect(easeInQuart(0.25)).toEqual(0.00390625)
    expect(easeInQuart(0.5)).toEqual(0.0625)
    expect(easeInQuart(0.75)).toEqual(0.31640625)
    expect(easeInQuart(1)).toEqual(1)
  })
  test('Test easeOutQuart', () => {
    expect(easeOutQuart(0)).toEqual(0)
    expect(easeOutQuart(0.25)).toEqual(0.68359375)
    expect(easeOutQuart(0.5)).toEqual(0.9375)
    expect(easeOutQuart(0.75)).toEqual(0.99609375)
    expect(easeOutQuart(1)).toEqual(1)
  })
  test('Test easeInOutQuart', () => {
    expect(easeInOutQuart(0)).toEqual(0)
    expect(easeInOutQuart(0.25)).toEqual(0.03125)
    expect(easeInOutQuart(0.5)).toEqual(0.5)
    expect(easeInOutQuart(0.75)).toEqual(0.96875)
    expect(easeInOutQuart(1)).toEqual(1)
  })
  test('Test easeInQuint', () => {
    expect(easeInQuint(0)).toEqual(0)
    expect(easeInQuint(0.25)).toEqual(0.0009765625)
    expect(easeInQuint(0.5)).toEqual(0.03125)
    expect(easeInQuint(0.75)).toEqual(0.2373046875)
    expect(easeInQuint(1)).toEqual(1)
  })
  test('Test easeOutQuint', () => {
    expect(easeOutQuint(0)).toEqual(0)
    expect(easeOutQuint(0.25)).toEqual(0.7626953125)
    expect(easeOutQuint(0.5)).toEqual(0.96875)
    expect(easeOutQuint(0.75)).toEqual(0.9990234375)
    expect(easeOutQuint(1)).toEqual(1)
  })
  test('Test easeInOutQuint', () => {
    expect(easeInOutQuint(0)).toEqual(0)
    expect(easeInOutQuint(0.25)).toEqual(0.015625)
    expect(easeInOutQuint(0.5)).toEqual(0.5)
    expect(easeInOutQuint(0.75)).toEqual(0.984375)
    expect(easeInOutQuint(1)).toEqual(1)
  })
  test('Test easeInSine', () => {
    expect(easeInSine(0)).toEqual(0)
    expect(easeInSine(0.25)).toEqual(0.07612046748871326)
    expect(easeInSine(0.5)).toEqual(0.2928932188134524)
    expect(easeInSine(0.75)).toEqual(0.6173165676349102)
    expect(easeInSine(1)).toEqual(0.9999999999999999)
  })
  test('Test easeOutSine', () => {
    expect(easeOutSine(0)).toEqual(0)
    expect(easeOutSine(0.25)).toEqual(0.3826834323650898)
    expect(easeOutSine(0.5)).toEqual(0.7071067811865475)
    expect(easeOutSine(0.75)).toEqual(0.9238795325112867)
    expect(easeOutSine(1)).toEqual(1)
  })
  test('Test easeInOutSine', () => {
    expect(easeInOutSine(0)).toEqual(-0)
    expect(easeInOutSine(0.25)).toEqual(0.1464466094067262)
    expect(easeInOutSine(0.5)).toEqual(0.49999999999999994)
    expect(easeInOutSine(0.75)).toEqual(0.8535533905932737)
    expect(easeInOutSine(1)).toEqual(1)
  })
  test('Test easeInExpo', () => {
    expect(easeInExpo(0)).toEqual(0)
    expect(easeInExpo(0.25)).toEqual(0.005524271728019902)
    expect(easeInExpo(0.5)).toEqual(0.03125)
    expect(easeInExpo(0.75)).toEqual(0.17677669529663687)
    expect(easeInExpo(1)).toEqual(1)
  })
  test('Test easeOutExpo', () => {
    expect(easeOutExpo(0)).toEqual(0)
    expect(easeOutExpo(0.25)).toEqual(0.8232233047033631)
    expect(easeOutExpo(0.5)).toEqual(0.96875)
    expect(easeOutExpo(0.75)).toEqual(0.99447572827198)
    expect(easeOutExpo(1)).toEqual(1)
  })
  test('Test easeInOutExpo', () => {
    expect(easeInOutExpo(0)).toEqual(0)
    expect(easeInOutExpo(0.25)).toEqual(0.015625)
    expect(easeInOutExpo(0.5)).toEqual(0.5)
    expect(easeInOutExpo(0.75)).toEqual(0.984375)
    expect(easeInOutExpo(1)).toEqual(1)
  })
  test('Test easeInCirc', () => {
    expect(easeInCirc(0)).toEqual(0)
    expect(easeInCirc(0.25)).toEqual(0.031754163448145745)
    expect(easeInCirc(0.5)).toEqual(0.1339745962155614)
    expect(easeInCirc(0.75)).toEqual(0.3385621722338523)
    expect(easeInCirc(1)).toEqual(1)
  })
  test('Test easeOutCirc', () => {
    expect(easeOutCirc(0)).toEqual(0)
    expect(easeOutCirc(0.25)).toEqual(0.6614378277661477)
    expect(easeOutCirc(0.5)).toEqual(0.8660254037844386)
    expect(easeOutCirc(0.75)).toEqual(0.9682458365518543)
    expect(easeOutCirc(1)).toEqual(1)
  })
  test('Test easeInOutCirc', () => {
    expect(easeInOutCirc(0)).toEqual(0)
    expect(easeInOutCirc(0.25)).toEqual(0.0669872981077807)
    expect(easeInOutCirc(0.5)).toEqual(0.5)
    expect(easeInOutCirc(0.75)).toEqual(0.9330127018922193)
    expect(easeInOutCirc(1)).toEqual(1)
  })
  test('Test easeInElastic', () => {
    expect(easeInElastic(0)).toEqual(0)
    expect(easeInElastic(0.25)).toEqual(-0.005524271728019902)
    expect(easeInElastic(0.5)).toEqual(-0.015625000000000045)
    expect(easeInElastic(0.75)).toEqual(0.08838834764831831)
    expect(easeInElastic(1)).toEqual(1)
  })
  test('Test easeOutElastic', () => {
    expect(easeOutElastic(0)).toEqual(0)
    expect(easeOutElastic(0.25)).toEqual(0.9116116523516816)
    expect(easeOutElastic(0.5)).toEqual(1.015625)
    expect(easeOutElastic(0.75)).toEqual(1.00552427172802)
    expect(easeOutElastic(1)).toEqual(1)
  })
  test('Test easeInOutElastic', () => {
    expect(easeInOutElastic(0)).toEqual(0)
    expect(easeInOutElastic(0.25)).toEqual(0.011969444423734044)
    expect(easeInOutElastic(0.5)).toEqual(0.5)
    expect(easeInOutElastic(0.75)).toEqual(0.988030555576266)
    expect(easeInOutElastic(1)).toEqual(1)
  })
  test('Test easeInBack', () => {
    expect(easeInBack(0)).toEqual(0)
    expect(easeInBack(0.25)).toEqual(-0.06413656250000001)
    expect(easeInBack(0.5)).toEqual(-0.08769750000000004)
    expect(easeInBack(0.75)).toEqual(0.1825903124999998)
    expect(easeInBack(1)).toEqual(0.9999999999999998)
  })
  test('Test easeOutBack', () => {
    expect(easeOutBack(0)).toEqual(2.220446049250313e-16)
    expect(easeOutBack(0.25)).toEqual(0.8174096875000002)
    expect(easeOutBack(0.5)).toEqual(1.0876975)
    expect(easeOutBack(0.75)).toEqual(1.0641365625)
    expect(easeOutBack(1)).toEqual(1)
  })
  test('Test easeInOutBack', () => {
    expect(easeInOutBack(0)).toEqual(-0)
    expect(easeInOutBack(0.25)).toEqual(-0.09968184375)
    expect(easeInOutBack(0.5)).toEqual(0.5)
    expect(easeInOutBack(0.75)).toEqual(1.09968184375)
    expect(easeInOutBack(1)).toEqual(1)
  })
  test('Test easeInBounce', () => {
    expect(easeInBounce(0)).toEqual(0)
    expect(easeInBounce(0.25)).toEqual(0.02734375)
    expect(easeInBounce(0.5)).toEqual(0.234375)
    expect(easeInBounce(0.75)).toEqual(0.52734375)
    expect(easeInBounce(1)).toEqual(1)
  })
  test('Test easeOutBounce', () => {
    expect(easeOutBounce(0)).toEqual(0)
    expect(easeOutBounce(0.25)).toEqual(0.47265625)
    expect(easeOutBounce(0.5)).toEqual(0.765625)
    expect(easeOutBounce(0.75)).toEqual(0.97265625)
    expect(easeOutBounce(1)).toEqual(1)
  })
  test('Test easeInOutBounce', () => {
    expect(easeInOutBounce(0)).toEqual(0)
    expect(easeInOutBounce(0.25)).toEqual(0.1171875)
    expect(easeInOutBounce(0.5)).toEqual(0.5)
    expect(easeInOutBounce(0.75)).toEqual(0.8828125)
    expect(easeInOutBounce(1)).toEqual(1)
  })
})
