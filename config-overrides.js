// Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
const path = require('path')
// const antdTheme = require('./theme.js')
const {
  override,
  fixBabelImports,
  // addLessLoader,
  useEslintRc,
  addDecoratorsLegacy,
  overrideDevServer,
  watchAll,
  addExternalBabelPlugins,
} = require('customize-cra')

const AntDesignThemePlugin = require('antd-theme-webpack-plugin')

console.log(path.join(__dirname, './node_modules/antd'))

const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/styles'),
  varFile: path.join(__dirname, './src/styles/variables.less'),
  mainLessFile: path.join(__dirname, './src/styles/index.less'),
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background',
    '@border-color-base',
  ],
  indexFileName: 'index.html',
  generateOnce: false, // generate color.less on each compilation
}

const themePlugin = new AntDesignThemePlugin(options)
// In plugins section, add this plugin instance
// plugins: [ themePlugin, some other plugins ]

module.exports = {
  webpack: override(
    // usual webpack plugin
    addDecoratorsLegacy(),
    useEslintRc(),

    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    /*
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: antdTheme,
    }),*/
    addExternalBabelPlugins(themePlugin),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll(),
  ),
}
