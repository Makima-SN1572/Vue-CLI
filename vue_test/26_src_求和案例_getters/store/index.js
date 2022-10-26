//该文件用于创建vuex最核心的store

//引入vue(我们要用vuex,vuex在vue里)
import Vue from "vue";

//引入Vuex
import Vuex from 'vuex'
//为了防止import优先执行,所以我们就把使用vuex放在了index里面,这样就可以先执行vuex,再创建store
Vue.use(Vuex)
//准备actions--用于响应组件里面的动作,actions是调用mutations里的方法来处理异步操作更新states里的数据
const actions = {
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
//准备getters--勇于将state中的数据进行加工
//gettrs方法:可以在里面写一些复杂的运算,并且所有组件都可以调用这个运算完成后的数据
const getter = {
    bigSum(state){
        return state.sum*10
    }
}
//创建并导出store
export default new Vuex.Store({
    //对象的key和保存对应值的变量重名,简写
    actions,
    mutations,
    state,
    getter
})