//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
//路由组件要放在pages中,和一般组件分开
import MyAbout from '../pages/About.vue'
import MyHome from '../pages/Home.vue'
import MyNews from '../pages/News.vue'
import MyMessage from '../pages/Message.vue'
import MyDetail from '../pages/Detail.vue'

//创建一个路由器
const router = new VueRouter({
    //路由器是管理一组一组的路由,所以是数组,路由是一一对应的key和value关系,是对象
    routes: [
        //一级路由是最外面的路由
        {
            //给路由配置名字
            //命名作用,让你在跳转的时候简化编码
            name: 'guanyu',
            path: '/about',
            component: MyAbout,
            meta: {
                title: '关于'
            }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: MyHome,
            meta:{title:'主页'},
            //二级路由(子路由)  path不要加/,他自己解析时会加/
            children: [{
                name: 'xingwen',
                path: 'news',
                component: MyNews,
                //meta路由元信息,程序员可以把自己想加的东西加到这个里面
                meta: {
                    isAuth: true,
                    title:'新闻'
                }
            }, {
                name: 'xiaoxi',
                path: 'message',
                component: MyMessage,
                //meta路由元信息,程序员可以把自己想加的东西加到这个里面
                meta: {
                    isAuth: true,
                    title:'消息'
                },
                //三级路由
                children: [{
                    name: 'xiangqing',
                    ///:id/:title params传参,需要告诉路由器传什么参数
                    path: 'detail/:id/:title',
                    component: MyDetail,
                    meta: {
                        isAuth: true,
                        title:'详情'
                    },
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
                    props({
                        params: {
                            id,
                            title
                        }
                    }) {
                        return {
                            id,
                            title
                        }
                    }

                }]
            }]
        }
    ]
})

//全局前置路由守卫
//在每一次路由切换之前(before),就调用一个函数,初始化的时候也会调用
//这个函数接收三个参数to,from,next
//to去哪(目标路由)
//from来自哪里
//next放行
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫里的函数被调用了');
    console.log('前置路由守卫的from与to参数', from, to);

    //我们提前在浏览器的本地存储写了 密匙school，值makima（测试无权限时,直接在浏览器上修改makima就行） 的数据

    //to.meta.isAuth鉴定一下是否需要权限
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'makima') {
            next()
        } else {
            alert('学校名不是makima，无权限查看')
        }
        //这里不是前两者的路径就直接放行
    } else {
        next()
    }
})

//全局后置路由守卫,后置路由守卫没有next参数
//在每一次路由切换之后(after),就调用一个函数,初始化的时候也会调用
router.afterEach((to, from) => {
    console.log('后置路由守卫里的函数被调用了');
    console.log('后置路由守卫的from与to参数', from, to);
    //到after时路由组件切换完毕,我们再更改浏览器标题
    document.title = to.meta.title || 'Makima'


})

//因为有路由守卫的原因我们不能直接在创建的时候就暴露路由器,写在路由守卫后面再暴露
export default router