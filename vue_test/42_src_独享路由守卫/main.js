//引入vue
import Vue from "vue";
//引入app
import App from "./App.vue";

//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'

//关闭vue的生产提示
Vue.config.productionTip = false

//使用路由器插件
Vue.use(VueRouter)

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router//要有相应的router文件夹
})