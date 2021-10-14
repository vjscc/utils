type timeFunction = (x: number) => number

const { pow, sqrt, sin, cos, PI } = Math
const c1 = 1.70158
const c2 = c1 * 1.525
const c3 = c1 + 1
const c4 = (2 * PI) / 3
const c5 = (2 * PI) / 4.5

function bounceOut(x: number): number {
  const n1 = 7.5625,
    d1 = 2.75
  if (x < 1 / d1) {
    return n1 * x * x
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375
  }
}

interface ITimingFunctionMap {
  linear: timeFunction
  swing: timeFunction
  easeInQuad: timeFunction
  easeOutQuad: timeFunction
  easeInOutQuad: timeFunction
  easeInCubic: timeFunction
  easeOutCubic: timeFunction
  easeInOutCubic: timeFunction
  easeInQuart: timeFunction
  easeOutQuart: timeFunction
  easeInOutQuart: timeFunction
  easeInQuint: timeFunction
  easeOutQuint: timeFunction
  easeInOutQuint: timeFunction
  easeInSine: timeFunction
  easeOutSine: timeFunction
  easeInOutSine: timeFunction
  easeInExpo: timeFunction
  easeOutExpo: timeFunction
  easeInOutExpo: timeFunction
  easeInCirc: timeFunction
  easeOutCirc: timeFunction
  easeInOutCirc: timeFunction
  easeInElastic: timeFunction
  easeOutElastic: timeFunction
  easeInOutElastic: timeFunction
  easeInBack: timeFunction
  easeOutBack: timeFunction
  easeInOutBack: timeFunction
  easeInBounce: timeFunction
  easeOutBounce: timeFunction
  easeInOutBounce: timeFunction
}

const timingFunctionMap: ITimingFunctionMap = {
  linear(x: number) {
    return x
  },
  swing(x: number) {
    return 0.5 - cos(x * Math.PI) / 2
  },
  easeInQuad(x: number) {
    return x * x
  },
  easeOutQuad(x: number) {
    return 1 - (1 - x) * (1 - x)
  },
  easeInOutQuad(x: number) {
    return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
  },
  easeInCubic(x: number) {
    return x * x * x
  },
  easeOutCubic(x: number) {
    return 1 - pow(1 - x, 3)
  },
  easeInOutCubic(x: number) {
    return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
  },
  easeInQuart(x: number) {
    return x * x * x * x
  },
  easeOutQuart(x: number) {
    return 1 - pow(1 - x, 4)
  },
  easeInOutQuart(x: number) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
  },
  easeInQuint(x: number) {
    return x * x * x * x * x
  },
  easeOutQuint(x: number) {
    return 1 - pow(1 - x, 5)
  },
  easeInOutQuint(x: number) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
  },
  easeInSine(x: number) {
    return 1 - cos((x * PI) / 2)
  },
  easeOutSine(x: number) {
    return sin((x * PI) / 2)
  },
  easeInOutSine(x: number) {
    return -(cos(PI * x) - 1) / 2
  },
  easeInExpo(x: number) {
    return x === 0 ? 0 : pow(2, 10 * x - 10)
  },
  easeOutExpo(x: number) {
    return x === 1 ? 1 : 1 - pow(2, -10 * x)
  },
  easeInOutExpo(x: number) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? pow(2, 20 * x - 10) / 2
      : (2 - pow(2, -20 * x + 10)) / 2
  },
  easeInCirc(x: number) {
    return 1 - sqrt(1 - pow(x, 2))
  },
  easeOutCirc(x: number) {
    return sqrt(1 - pow(x - 1, 2))
  },
  easeInOutCirc(x: number) {
    return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
  },
  easeInElastic(x: number) {
    return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
  },
  easeOutElastic(x: number) {
    return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1
  },
  easeInOutElastic(x: number) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
      : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1
  },
  easeInBack(x: number) {
    return c3 * x * x * x - c1 * x * x
  },
  easeOutBack(x: number) {
    return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
  },
  easeInOutBack(x: number) {
    return x < 0.5
      ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
      : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
  },
  easeInBounce(x: number) {
    return 1 - bounceOut(1 - x)
  },
  easeOutBounce: bounceOut,
  easeInOutBounce(x: number) {
    return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
  }
}

export type timingFunctionName = keyof ITimingFunctionMap

/**
 * Use timing function to calculate value in progress.
 *
 * @param fnName Function name.
 * @param t Current time.
 * @param b Start value.
 * @param c Target value.
 * @param d Duration.
 * @returns Current value.
 */
export function timingFunction(
  fnName: timingFunctionName,
  t: number,
  b: number,
  c: number,
  d: number
): number {
  const fn = timingFunctionMap[fnName]
  if (!fn) throw new Error(`Timing function not found: '${fnName}''.`)

  const progress = t / d
  const diff = c - b
  return fn(progress) * diff + b
}
