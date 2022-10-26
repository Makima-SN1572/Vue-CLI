<template>
  <div>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
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
        return this.$store.state.personList
    },
    //该组件共享另一个组件的数据,这样就实现了数据的共用sum
    sum(){
        return this.$store.state.sum
    }

},
methods: {
    add(){
        const personObj = {id:nanoid(),name:this.name}
        console.log(personObj);
        this.$store.commit('ADD_PERSON',personObj)
        this.name=''
    }
},
}
</script>

<style>

</style>