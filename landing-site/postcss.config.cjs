const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssOklabFunction = require('@csstools/postcss-oklab-function')

module.exports = {
  plugins: [tailwindcss(), autoprefixer(), postcssOklabFunction({ preserve: true })]
}
