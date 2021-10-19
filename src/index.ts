import { fadeIn, fadeOut } from './animations'
import { getBase64, isWindow } from './bom'
import {
  isHTMLElement,
  isHTMLElementOrDocument,
  isStringOrHTMLElement,
  getElementViaStringOrHTMLElement
} from './dom'
import { debounce, throttle } from './functions'
import { convertNumberToMoney } from './money'
import { createRAF, cancelRAF } from './raf'
import { createRandomInteger, createRandomString, createRandomStringWidthDivider } from './random'
import { useTimingFunction } from './useTimingFunction'
import {
  isUndefined,
  isNull,
  isString,
  isNumber,
  isBoolean,
  isSymbol,
  isBigInt,
  isObject,
  isPlainObject,
  isArray,
  isFunction
} from './types'

export {
  fadeIn,
  fadeOut,
  getBase64,
  isWindow,
  isHTMLElement,
  isHTMLElementOrDocument,
  isStringOrHTMLElement,
  getElementViaStringOrHTMLElement,
  debounce,
  throttle,
  convertNumberToMoney,
  createRAF,
  cancelRAF,
  createRandomInteger,
  createRandomString,
  createRandomStringWidthDivider,
  useTimingFunction,
  isUndefined,
  isNull,
  isString,
  isNumber,
  isBoolean,
  isSymbol,
  isBigInt,
  isObject,
  isPlainObject,
  isArray,
  isFunction
}
