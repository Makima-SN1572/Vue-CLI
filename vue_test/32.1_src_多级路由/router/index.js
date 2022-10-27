//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
//路由组件要放在pages中,和一般组件分开
import MyAbout from '../pages/About.vue'
import MyHome from '../pages/Home.vue'
import MyNews from '../pages/News.vue'
import MyMessage from '../pages/Message.vue'
import MyDetail from '../pages/Detail.vue'

//创建并暴露一个路由器
export default new VueRouter({
    //路由器是管理一组一组的路由,所以是数组,路由是一一对应的key和value关系,是对象
    routes: [
        //一级路由是最外面的路由
        {
            path: '/about',
            component: MyAbout
        },
        {
            path: '/home',
            component: MyHome,
            //二级路由(子路由)  path不要加/,他自己解析时会加/
            children: [{
                path: 'news',
                component: MyNews,
            }, {
                path: 'message',
                component: MyMessage,
                //三级路由
                children: [{
                    path: 'detail',
                    component: MyDetail,
                }]
            }]
        }
    ]
})