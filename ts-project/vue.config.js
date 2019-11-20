const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: 'http://127.0.0.1:4000'
  },
  css: {
    sourceMap: true, // 设置css sourceMap
    loaderOptions: { // 
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 配置 rem
            rootValue : 37.5, // 换算的基数
            propList   : ['*'], // 需要把哪些样式换算成rem
            minPixelValue: 2
          }),
        ]
      }
    }
  }
}