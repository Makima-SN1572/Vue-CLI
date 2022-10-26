//引入vue
import Vue from "vue";
//引入app
import App from "./App.vue";

//全局引入mixin混入
import{mixin,mixin2} from './mixin'
//关闭vue的生产提示
Vue.config.productionTip = false

//全局调用mixin混入
Vue.mixin(mixin)//此时所有的vm与vc都可以使用这两个mixin混合
Vue.mixin(mixin2)//此时所有的vm与vc都可以使用这两个mixin混合

//创建vm
new Vue({
    el:'#app',
    render:h=>h(App)
})
