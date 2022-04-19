/**
 *  postcss configuration object
 *
 * @returns {object}
 */
module.exports = () => {
  const plugins = [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
  ]

  if (process.env.NODE_ENV === 'production') {
    plugins.push(require('postcss-csso'))
  }

  return {
    plugins
  }
}
