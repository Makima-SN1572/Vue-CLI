<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
  </div>
</template>

<script>
//此处因为我们是单机的数据不上传服务器,所以我们采用轻量化的nanoid(npm i nanoid)去生成独立的id
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title:''
    }
  },
  methods:{
    add(){

      //校验数据
      if(!this.title.trim()) return alert('输入不能为空')
      //将用户的淑如包装成一个todo对象{}
      const todoObj = {id:nanoid(),title:this.title,done:false}
      //此时我们需要把这个todoObj对象传到list组件里,但是兄弟组件之间以现在的方法无法相互传值,所以我们要给她们的爹APP组件,让父组件通过props去传给list组件
      

      //当我们需要给父组件传东西时,需要借用父组件事先给我们的函数传过去
      //通知App组件去添加一个todo对象
      this.addTodo(todoObj)
      //清空输入
      this.title = ''

    }
  },
  props:['addTodo']
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>