import path from 'node:path'
import pkg from './package.json'

import clear from 'rollup-plugin-clear'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import ts from 'rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'

/** @type import('rollup').RollupOptions */
const config = {
  input: path.join(__dirname, 'src/index.ts'),
  output: [
    {
      name: pkg.global,
      file: pkg.main,
      format: 'umd',
      exports: 'auto',
      sourcemap: true
    },
    {
      name: pkg.global,
      file: 'dist/browser/vjscc-utils.min.js',
      format: 'umd',
      exports: 'auto',
      plugins: [terser()],
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'auto',
      sourcemap: true
    }
  ],

  plugins: [
    clear({
      targets: ['dist']
    }),
    resolve(),
    commonjs(),
    ts({
      transpiler: 'swc'
    })
  ]
}

export default config
