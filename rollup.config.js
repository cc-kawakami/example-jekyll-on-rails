import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import stimulus from 'rollup-plugin-stimulus'

/**
 * rollup configuration function
 *
 * @returns {object}
 */
export default () => {
  // defaults
  const plugins = [
    stimulus(),
    nodeResolve()
  ]
  let sourcemap = true

  // production 向け
  // 圧縮するが license 表記だけ残す
  // sourcemap は出力しない
  if (process.env.NODE_ENV === 'production') {
    plugins.push(terser({
      format: {
        /**
         * @param {object} node
         * @param {object} comment
         * @returns {boolean}
         */
        comments: (node, comment) => /@license|@preserve|@copyright|\/\*\!/.test(comment.value)
      }
    }))
    sourcemap = false
  }

  return {
    input: 'frontend/javascripts/main.js',
    output: {
      file: 'public/assets/javascripts/main.js',
      format: 'iife',
      sourcemap
    },
    plugins
  }
}
