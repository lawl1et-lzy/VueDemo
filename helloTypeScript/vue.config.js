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
            rootValue : 37.5, // 换算的基数 默认100，作用 设计稿上元素宽375px,最终页面会换算成 10rem
            propList   : ['*'], // 需要把哪些样式换算成rem
            selectorBlackList: [], // 忽略转换正则匹配项（选择器）
            minPixelValue: 2, //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
    }
  }
}