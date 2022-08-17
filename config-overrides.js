const { override, addWebpackAlias, adjustStyleLoaders, fixBabelImports } = require('customize-cra');
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({
    '@': resolve('src')
  }),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/assets/style/variable.scss'
        }
      })
    }
  })
);