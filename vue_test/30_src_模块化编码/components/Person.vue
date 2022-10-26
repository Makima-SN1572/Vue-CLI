<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <h3>列表中第一个人的名字是{{firstPersonName}}</h3>
    <button @click="add">添加</button>
    <button @click="addm">添加一个m的人</button>
    <button @click="addPersonServer">添加一个人,名字随机</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
    <h4 style="color:aquamarine">上方总数求和为{{sum}}</h4>
  </div>
</template>

<script>
//import{mapState}from 'vuex'
import {nanoid} from 'nanoid'
export default {
name:'MyPerson',
data() {
    return {
        name:''
    }
},
computed:{
    //...mapState(['personList'])
    personList(){
        return this.$store.state.personAbout.personList
    },
    //该组件共享另一个组件的数据,这样就实现了数据的共用sum
    sum(){
        return this.$store.state.countAbout.sum
    },
    firstPersonName(){
        //getters下的都是personAbout/firstPersonName这样的,不能用.语法来连接/语法,所以我们用[数组]来拿到数据,但是mapgetters就能和其他map一样写法
        return this.$store.getters['personAbout/firstPersonName']
    }

},
methods: {
    add(){
        const personObj = {id:nanoid(),name:this.name}
        console.log(personObj);
        //personAbout/ADD_PERSON是通过personAbout模块读取到ADD_PERSON这个函数
        this.$store.commit('personAbout/ADD_PERSON',personObj)
        this.name=''
    },
    addm(){
        const personObj = {id:nanoid(),name:this.name}
        this.$store.dispatch('personAbout/addPersonM',personObj)
        this.name=''
    },
    addPersonServer(){
        this.$store.dispatch('personAbout/addPersonServer')
    }
},
}
</script>

<style>

</style>