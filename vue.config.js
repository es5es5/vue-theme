const webpack = require('webpack')

// vue.config.js
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
      })
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/theme.scss";
        `
      }
    }
  },
  devServer: {
    // host: '0.0.0.0',
    // https: true,
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
