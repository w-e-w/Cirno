module.exports = {
  lintOnSave: true,
  productionSourceMap: true,
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  devServer: {
    port: 9012,
    open: false,
    proxy: {
      '/hbooker': {
        //测试
        target: process.env.VUE_APP_TARGET_URL, //目标主机
        changeOrigin: true, //是否跨域 默认 true
        ws: true, //代理的 WebSockets 默认 true
        secure: false, //是否开启 ssl 加密 https
        pathRewrite: {
          '^/hbooker': '/hbooker' //路径替换
        }
      }
    }
  }
}
