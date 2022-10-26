//引入vue
import Vue from "vue";
//引入app
import App from "./App.vue";

//关闭vue的生产提示
Vue.config.productionTip = false

//引入插件
import vueResource from 'vue-resource'
//使用插件,所有组件都能用
Vue.use(vueResource)
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})