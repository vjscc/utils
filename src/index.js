import * as createRandom from './createRandom'
import getBase64 from './getBase64'
import * as money from './money'
import * as lang from './lang'

export default {
  ...createRandom,
  getBase64,
  ...money,
  ...lang
}
