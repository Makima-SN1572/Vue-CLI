//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
//路由组件要放在pages中,和一般组件分开
import MyAbout from '../pages/About.vue'
import MyHome from '../pages/Home.vue'

//创建并暴露一个路由器
export default new VueRouter({
    //路由器是管理一组一组的路由,所以是数组,路由是一一对应的key和value关系,是对象
    routes:[
        {
            path:'/about',
            component:MyAbout
        },
        {
            path:'/home',
            component:MyHome
        }
    ]
})
