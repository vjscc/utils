const {
  E,
  LN2,
  LN10,
  LOG2E,
  LOG10E,
  PI,
  SQRT1_2,
  SQRT2,
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  cbrt,
  ceil,
  clz32,
  cos,
  cosh,
  exp,
  expm1,
  floor,
  fround,
  hypot,
  imul,
  log,
  log1p,
  log2,
  log10,
  max,
  min,
  pow,
  random,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc
} = Math

/**
 * Constrain a value to lie between two further values.
 *
 * @param x Value to be constrained.
 * @param minValue Minimum value.
 * @param maxValue Maximum value.
 * @returns Constrained value.
 */
function clamp(x: number, minValue: number, maxValue: number): number {
  return min(max(x, minValue), maxValue)
}

/**
 * Compute the fractional part of the argument.
 *
 * @param x Value.
 * @returns Fract part of value.
 */
function fract(x: number): number {
  return x - floor(x)
}

/**
 * Convert a quantity in degrees to radians.
 *
 * @param degree Degree.
 * @returns Radian.
 */
function radians(degree: number): number {
  return (PI * degree) / 180
}

/**
 * Convert a quantity in radians to degrees.
 *
 * @param radian Radian.
 * @returns Degree.
 */
function degrees(radian: number): number {
  return (180 * radian) / PI
}

export {
  E,
  LN2,
  LN10,
  LOG2E,
  LOG10E,
  PI,
  SQRT1_2,
  SQRT2,
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  cbrt,
  ceil,
  clz32,
  cos,
  cosh,
  exp,
  expm1,
  floor,
  fround,
  hypot,
  imul,
  log,
  log1p,
  log2,
  log10,
  max,
  min,
  pow,
  random,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc,
  clamp,
  fract,
  radians,
  degrees
}
