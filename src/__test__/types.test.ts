import {
  isArray,
  isBigInt,
  isBoolean,
  isFunction,
  isString,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isSymbol,
  isUndefined
} from '..'

describe('isArray', () => {
  test('Test array', () => {
    expect(isArray([])).toBeTruthy()
    // eslint-disable-next-line no-sparse-arrays
    expect(isArray([, , 1])).toBeTruthy()
    expect(isArray(new Array(10))).toBeTruthy()
  })
})

describe('isBigInt', () => {
  test('Test bigint', () => {
    expect(isBigInt(BigInt(0))).toBeTruthy()
  })
})

describe('isBoolean', () => {
  test('Test boolean', () => {
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean(false)).toBeTruthy()
  })

  test('Test familiar truthy or falsy value', () => {
    expect(isBoolean(0)).toBeFalsy()
    expect(isBoolean('')).toBeFalsy()
    expect(isBoolean(undefined)).toBeFalsy()
    expect(isBoolean(null)).toBeFalsy()
    expect(isBoolean(1)).toBeFalsy()
    expect(isBoolean({})).toBeFalsy()
  })
})

describe('isFunction', () => {
  test('Test array', () => {
    function log(x: unknown) {
      console.log(x)
    }
    const dir = (x: unknown) => console.dir(x)
    expect(isFunction(setTimeout)).toBeTruthy()
    expect(isFunction(log)).toBeTruthy()
    expect(isFunction(dir)).toBeTruthy()
  })
})

describe('isString', () => {
  test('Test string', () => {
    expect(isString('')).toBeTruthy()
    expect(isString('12345')).toBeTruthy()
    expect(isString('abcdefg')).toBeTruthy()
  })

  test('Test string object', () => {
    expect(isString(new String('asdf'))).toBeTruthy()
    expect(isString(new String())).toBeTruthy()
  })
})

describe('isNull', () => {
  test('Test null', () => {
    expect(isNull(null)).toBeTruthy()
  })

  test('Not null', () => {
    expect(isNull(undefined)).toBeFalsy()
    expect(isNull({})).toBeFalsy()
  })
})

describe('isNumber', () => {
  test('Test number', () => {
    expect(isNumber(0)).toBeTruthy()
    expect(isNumber(0xfff)).toBeTruthy()
    expect(isNumber(NaN)).toBeTruthy()
    expect(isNumber(Infinity)).toBeTruthy()
  })

  test('Test number object', () => {
    expect(isNumber(new Number())).toBeTruthy()
    expect(isNumber(new Number(NaN))).toBeTruthy()
  })
})

describe('isObject', () => {
  test('Test objects', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject(Math)).toBeTruthy()
    expect(isObject(Date)).toBeTruthy()
    expect(isObject(new String())).toBeTruthy()
    expect(isObject(new Number())).toBeTruthy()
  })

  test('Test functions', () => {
    expect(isObject(setTimeout)).toBeTruthy()
    expect(isObject(requestAnimationFrame)).toBeTruthy()
  })
})

describe('isPlainObject', () => {
  test('Test plain objects', () => {
    expect(isPlainObject({})).toBeTruthy()
    expect(isPlainObject(new Object())).toBeTruthy()
  })

  test('Test others', () => {
    class X {
      x: number
      constructor(x: number) {
        this.x = x
      }
    }
    expect(isPlainObject(new X(0))).toBeFalsy()
    expect(isPlainObject(new Date())).toBeFalsy()
    expect(isPlainObject(() => void 0)).toBeFalsy()
    expect(isPlainObject(0)).toBeFalsy()
  })
})

describe('isSymbol', () => {
  test('Test symbol', () => {
    expect(isSymbol(Symbol())).toBeTruthy()
  })

  test('Test symbol object', () => {
    expect(isSymbol(new Object(Symbol()))).toBeTruthy()
  })
})

describe('isUndefined', () => {
  test('Undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function a() {}
    expect(isUndefined(a())).toBeTruthy()
    expect(isUndefined(undefined)).toBeTruthy()
    expect(isUndefined(void 0)).toBeTruthy()
  })

  test('Falsy values is not undefined', () => {
    expect(isUndefined(null)).toBeFalsy()
    expect(isUndefined(NaN)).toBeFalsy()
    expect(isUndefined('')).toBeFalsy()
  })
})
