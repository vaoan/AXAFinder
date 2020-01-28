// Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
const themeConfig = require('./config-theme.js')
const {
  override,
  addLessLoader,
  useEslintRc,
  addDecoratorsLegacy,
  overrideDevServer,
  watchAll,
  fixBabelImports,
  addWebpackPlugin,
} = require('customize-cra')

module.exports = {
  webpack: override(
    // usual webpack plugin
    addDecoratorsLegacy(),
    useEslintRc(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'lib',
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#00375B',
        '@text-color-secondary': '#eb2f96',
        '@heading-color': '#fa8c16',
      },
    }),
    addWebpackPlugin(themeConfig.plugin),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll(),
  ),
}
