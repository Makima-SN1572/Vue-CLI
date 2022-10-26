<template>
  <div class="student">
    <h2>学生姓名{{Name}}</h2>
    <h1>当前number为{{number}}</h1>
    <h2>学生性别{{Sex}}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑maki事件</button>
    <button @click="death">点我销毁当前Student组件的实例(vc)</button>
    <button @click="add">点我number++</button>
  </div>
</template>

<script>

export default {
    name:'MyStudent',
    data() {
        return {
          Name:'makima',
          Sex:'女',
          number:18
        }
    },
    methods:{
      add(){
        console.log('add函数被调用了');
        this.number++
      },
      sendStudentName(){
        //触发student实例组件身上的maki事件
        //this[vc].$emit[触发]('你要触发的事件',你要传的数据this[vc].Name[name数据])

        //当我们有许多数据要传时666,888,77,就用es6  ...params
        this.$emit('maki',this.Name,666,888,77)
        //this.$emit('demo')
        this.$emit('click')
      },
      unbind(){
        this.$off('maki')//解绑一个自定义事件
        //this.$off(['maki','demo'])//解绑多个自定义事件
        //this.$off()//解绑所以自定义事件
      },
      death(){
        //console.log('清除student实例组件');
        this.$destroy()//销毁当前Studentvc,所有该vc自定义事件不生效
      }

    }
}
</script>
<style scoped>
.student{
  background-color: burlywood;
  padding: 5px;
  
}
</style>
