const AntDesignThemePlugin = require('antd-theme-webpack-plugin')
const path = require('path')
const fs = require('fs')

const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/assets/styles'),
  varFile: path.join(__dirname, './src/assets/styles/config/variables.less'),
  mainLessFile: path.join(__dirname, './src/assets/styles/index.less'),
  themeVariables: ['@primary-color'],
  indexFileName: 'index.html',
  generateOnce: false,
  // lessUrl: path.join(__dirname, './node_modules/less/dist/less.min.js'),
  publicPath: '',
  customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
}
const lessToJs = require('less-vars-to-js')
const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './src/assets/styles/config/variables.less'), 'utf8'),
)

module.exports = {
  plugin: new AntDesignThemePlugin(options),
  themeVars: themeVariables,
}
