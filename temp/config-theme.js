const AntDesignThemePlugin = require('antd-theme-webpack-plugin')
const path = require('path')

module.exports = {
  plugin: new AntDesignThemePlugin({
    antDir: path.join(__dirname, './node_modules/antd'),
    stylesDir: path.join(__dirname, './src/assets/styles'),
    varFile: path.join(__dirname, './src/assets/styles/variables.less'),
    mainLessFile: path.join(__dirname, './src/styles/assets/index.less'),
    themeVariables: [
      '@body-background',
      '@font-size-base',
      '@font-size-lg',

      '@font-family',
      '@code-family',

      '@border-color-base',

      '@background-color-light',
      '@background-color-base',
      '@primary-color',
      '@info-color',
      '@success-color',
      '@error-color',
      '@highlight-color',
      '@warning-color',
      '@normal-color',

      '@input-padding-horizontal',
      '@input-padding-vertical-base',
      '@input-padding-vertical-sm',
      '@input-padding-vertical-lg',
      '@input-border-color',
      '@input-hover-border-color',

      '@shadow-color',
      '@box-shadow-base',
      '@shadow-1-up',
      '@shadow-1-down',
      '@shadow-1-left',
      '@shadow-1-right',
      '@shadow-2',

      '@table-header-bg',
      '@table-header-sort-bg',
      '@table-row-hover-bg',
      '@table-padding-vertical',
      '@table-padding-horizontal',
      '@modal-mask-bg',

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
  }),
}
