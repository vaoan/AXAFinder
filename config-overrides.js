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
  addWebpackModuleRule,
} = require('customize-cra')

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
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: themeConfig.themeVars,
    }),
    addWebpackModuleRule({
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' },
    }),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll(),
  ),
}
