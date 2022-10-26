import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        addPersonM(context, value) {
            //输入的名字第一个必须是m
            if (value.name.indexOf('m') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须第一个字母是m')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error =>{
                    alert(error.message)
                }
            )
        }

    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用了', state, value);
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{
            id: '001',
            name: 'makima'
        }]
    },
    getters: {
        //这里的state拿的是他这个模块的state,而不是总的state
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}