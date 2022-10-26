//引入vue
import Vue from "vue";
//引入app
import App from "./App.vue";
//引入插件
import plugins from './plugins'
//关闭vue的生产提示
Vue.config.productionTip = false

//应用(使用)插件,后面还能带参数
Vue.use(plugins,1,2,3)

//创建vm
new Vue({
    el:'#app',
    render:h=>h(App)
})
