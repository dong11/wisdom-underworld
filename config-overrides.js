const { override, addWebpackAlias, adjustStyleLoaders } = require('customize-cra');
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
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