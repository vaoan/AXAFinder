// Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
const themeConfig = require('./config-theme.js')
const {
  override,
  // fixBabelImports,
  addLessLoader,
  useEslintRc,
  addDecoratorsLegacy,
  overrideDevServer,
  watchAll,
  addWebpackPlugin,
} = require('customize-cra')

module.exports = {
  webpack: override(
    // usual webpack plugin
    addDecoratorsLegacy(),
    useEslintRc(),
    /*
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    */

    addLessLoader({
      javascriptEnabled: true,
      //modifyVars: antdTheme,
    }),
    addWebpackPlugin(themeConfig.plugin),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll(),
  ),
}
