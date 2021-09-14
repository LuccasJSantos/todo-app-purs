const path = require('path')

module.exports = {
  chainWebpack (config) {
    config.module
      .rule('purescript')
      .test(/\.purs$/)
      .use('purs-loader')
      .loader('purs-loader')
      .tap(() => ({
        src: [
          path.join('src', '**', '*.purs'),
          path.join('.spago', '**', 'src', '**', '*.purs')
        ]
      }))
  }
}
