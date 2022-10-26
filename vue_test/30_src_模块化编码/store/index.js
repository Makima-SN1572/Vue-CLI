//该文件用于创建vuex最核心的store

//引入vue(我们要用vuex,vuex在vue里)
import Vue from "vue";

//引入Vuex
import Vuex from 'vuex'
//为了防止import优先执行,所以我们就把使用vuex放在了index里面,这样就可以先执行vuex,再创建store

//我们的组件相关配置都放在一起了,需要分开,防止过于臃肿
//引入模块化编码
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)


//创建并导出store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})