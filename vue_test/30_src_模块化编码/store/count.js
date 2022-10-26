//求和相关配置
export default {
    namespaced:true,//命名空间,默认值false,打开后我们就可以在组件中我们countAbout分类名才能被mapState认识,找到这里
    actions: {
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
            }, 1000)
        },
    },
    mutations: {
        JIA(state, value) {
            //这里的state是数据代理后的哪个state对象,里面有我们需要的数据sum
            console.log('mutations中的JIA被调用了', state, value);
            state.sum += value
        },
        JIAN(state, value) {

            console.log('mutations中的JIAN被调用了', state, value);
            state.sum -= value
        },
    },
    state: {
        sum: 0, //当前的和
        school: '东京大学',
        subject: '经济学',
    },
    getters: {
        //state是局部的,他自己模板的state
        bigSum(state) {
            return state.sum * 10
        }
    }
}