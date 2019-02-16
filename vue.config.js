/* eslint-disable */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons')).end()
    
    config.module
      .rule('svg-icon')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')).end()
      .use('svg-icon/loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
  },
  devServer: {
    host: '0.0.0.0',
    port: 2015,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
    open: true
  }
}
