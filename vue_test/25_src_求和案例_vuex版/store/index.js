//该文件用于创建vuex最核心的store

//引入vue(我们要用vuex,vuex在vue里)
import Vue from "vue";

//引入Vuex
import Vuex from 'vuex'
//为了防止import优先执行,所以我们就把使用vuex放在了index里面,这样就可以先执行vuex,再创建store
Vue.use(Vuex)
//准备actions--用于响应组件里面的动作,actions是调用mutations里的方法来处理异步操作更新states里的数据
const actions = {
    //context是一个mini的store,里面包含了你可能会使用的东西,value就是我们的n值
    //actions理解为Controller的Action,mutations理解为Service,Statue理解为数据库，所以actions/mutations方法名相同也就能理解了
    /* jia: function (context, value) {
        console.log('actions中的jia被调用了', context, value);
        //这里就是把jia大写了,不是重新命名,和不大写的是一样的,你不大写也没事
        context.commit('JIA', value)
    },
    jian(context, value) {
        console.log('actions中的jian被调用了', context, value);
        context.commit('JIAN', value)
    }, */
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了', context, value);
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了', context, value);
        setTimeout(() => {
            context.commit('JIA', value)
        },1000)
    },

}

//准备mutations--用于操作数据(state)
const mutations = {
    JIA(state, value) {
        //这里的state是数据代理后的哪个state对象,里面有我们需要的数据sum
        console.log('mutations中的JIA被调用了', state, value);
        state.sum += value
    },
    JIAN(state, value) {

        console.log('mutations中的JIAN被调用了', state, value);
        state.sum -= value
    }
}
//准备state--用于存储数据
const state = {
    sum: 0, //当前的和
}
//创建并导出store
export default new Vuex.Store({
    //对象的key和保存对应值的变量重名,简写
    actions,
    mutations,
    state
})