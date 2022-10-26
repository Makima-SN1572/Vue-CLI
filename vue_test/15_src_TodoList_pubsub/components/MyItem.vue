<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" style="" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  //声明接收tudo对象
  props: ["todo"],
  methods: {
    //勾选ro取消勾选
    handleCheck(id) {
      //通知APP组件将对应的todo对象的done值取反
      //this.checkTodo(id);
      this.$bus.$emit('checkTodo',id)
    },
    //删除
    handleDelete(id){
      //confirm是js自带的一个确定框，点击确认则返回true,取消返回false
      if(confirm('你确定删除吗')){
        //这里三个deleteTodo都不一样
        //this.deleteTodo(id)//deleteTodo是父组件传过来的函数名
        //this.$bus.$emit('deleteTodo',id)//deleteTodo是事件名+需要的数据
        pubsub.publish('deleteTodo',id)//deleteTodo是订阅消息的消息名+需要的数据
        
      }
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: bisque;
}
li:hover button{
  background-color: rgb(red, green, blue);
  display: block;
}
</style>