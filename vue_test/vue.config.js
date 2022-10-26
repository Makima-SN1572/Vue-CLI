const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pages: {
    index: {
      //入口
      /* 我们这里通过vue.config.js来修改wepack里面隐藏不让修改的文件名,在这里命名后你就可以自定义改文件名了,但是要注意这里不能什么都不写,不如不用 */
      entry: 'src/main.js',
    },

  },
  lintOnSave: false, //关闭语法检查

  //开启代理服务器(第一种)
  //这种方式只能开启一个代理
  /* devServer: {
    //把代理转发给你要的服务器端口,我们这里是5000
    proxy: 'http://localhost:5000'
  },*/
  //开启代理服务器(第二种)
  //可以避免不走代理
  //'/api'[请求前缀,走代理就可以用/api,不需要代理就可以不用,也可以改名字,就是要在你请求的端口号后写你改的名字,代理发现你的前缀是maki,就会去找服务器的/maki/students,但服务器没有maki下的students,只有students,所以要把代理发给服务器的前缀取消掉pathRewrite:{'^/maki':''},]
  devServer: {
    proxy: {
      '/maki': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/maki': ''
        },
        ws: true, //用于支持websocket,默认true
        changeOrigin: true //true会让代理服务器撒谎,告诉服务器他们俩端口一样,防止端口不一样不能获取数据,false就是代理服务器会告诉服务器他真实的端口(用于控制请求头中的host值)
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/demo': ''
        },
        ws: true, //用于支持websocket
        changeOrigin: true
      }
    }
  }
}