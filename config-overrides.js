// Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
// const themeConfig = require('./config-theme.js')
const {
  override,
  addLessLoader,
  useEslintRc,
  addDecoratorsLegacy,
  overrideDevServer,
  watchAll,
  // addWebpackPlugin,
} = require('customize-cra')

module.exports = {
  webpack: override(
    // usual webpack plugin
    addDecoratorsLegacy(),
    useEslintRc(),

    addLessLoader({
      javascriptEnabled: true,
      //modifyVars: antdTheme,
    }),
    //addWebpackPlugin(themeConfig.plugin),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll(),
  ),
}
