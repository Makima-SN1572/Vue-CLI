//引入vue
import Vue from "vue";
//引入app
import App from "./App.vue";

//关闭vue的生产提示
Vue.config.productionTip = false

//我们直接在Vue原型上放x对象,这样所有的vc和vm都可以顺着找到x


//创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
    beforeCreate(){
        //这里我们利用生命周期特性,Vue实例会在在生命周期前先创立虽然数据什么的都还没代理监测,那么我们就利用这个特性,拿到Vue实例上的$on,$off,$emit那些vue本身自带自定义事件,这样我们直接在beforeCreate第一个生命周期那里截停,直接把$bus放进去,让他等于我们的vue实例,这样我们就得到一个十分原始的vue实例,他命名为$bus,并且能被所有vm,vc看到,而且带有所有自定义所需要的东西
        //艹,真是公交车了,谁都能上(总线)
        Vue.prototype.$bus = this//安装全局事件总线
    }
})
