//引入vue
import Vue from "vue";
//引入app
import App from "./App.vue";

//关闭vue的生产提示
Vue.config.productionTip = false

//引入插件
import vueResource from 'vue-resource'

//引入store
import store from './store/index'
//webpack在解析文件时把import语句提升了。是es6中import变量提升的问题，但是import提升这个叫法还有待商榷，里面涉及到import异步的问题
//因为import是优先先执行的,所以你先执行了store,但vuex还没使用,所以我们就要写在index.js里面
//使用插件,所有组件都能用
Vue.use(vueResource)
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    //store是vuex里的需要引vuex才能使用
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})