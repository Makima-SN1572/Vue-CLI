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
            //给路由配置名字
            //命名作用,让你在跳转的时候简化编码
            name:'guanyu',
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
                    name:'xiangqing',
                    ///:id/:title params传参,需要告诉路由器传什么参数
                    path: 'detail/:id/:title',
                    component: MyDetail,
                    //props的第一种写法,值为对象,该对象中所有的key,value都会以props的形式传给该路由组件,这里路由组件是MyDetail
                    //props:{id:1,title:'hello'},只能传写好的数据
                    
                    //props的第二种写法,值为布尔值,若布尔值为true,就会把该路由组件收到的所有params参数,以props的形式传给该路由组件,这里是传给MyDetail组件
                    //props:true,不能传query参数

                    //props的第三种写法,值为函数,其中所有的key,value都会以props的形式传给该路由组件,这里路由组件是MyDetail
                    //可以直接帮你把$route当成参数给你拿过来,这样你就可以返回相关的数据,而且支持query,params两个参数方式传参
                   /*  props($route){
                         //return {id:$route.query.id,title:$route.query.title} 
                        return {id:$route.params.id,title:$route.params.title}
                    } */
                    //通过结构赋值我们直接拿query或者params
                   /*  props({params}){
                        //参数是query时
                         //return {id:query.id,title:query.title} 
                        return {id:params.id,title:params.title}
                    } */
                    //再次连续结构赋值,这里根据参数的不同只要改是params,还是query就行
                    props({params:{id,title}}){
                        return {id,title}
                    }

                }]
            }]
        }
    ]
})