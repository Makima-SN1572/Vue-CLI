<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 用v-show当他todo.isEdit等于true就显示输入框,反之只显示文字 -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <!--  -->
      <input v-show="todo.isEdit"
       type="text" 
       :value="todo.title" 
       @blur="handleBlur(todo,$event)"/>
    </label>
    <button class="btn btn-danger" style="" @click="handleDelete(todo.id)">
      删除
    </button>
    <!-- 编辑的时候不显示按钮 -->
    <button v-show="!todo.isEdit" class="btn btn-edit" style="" @click="handleEdit(todo)">
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //声明接收tudo对象
  props: ["todo"],
  methods: {
    //勾选ro取消勾选
    handleCheck(id) {
      this.$bus.$emit("checkTodo", id);
    },
    //删除
    handleDelete(id) {
      if (confirm("你确定删除吗")) {
        pubsub.publish("deleteTodo", id); //deleteTodo是订阅消息的消息名+需要的数据
      }
    },
    handleEdit(todo) {
      //这里虽然能把isEdit = true加到todo里,但是没有数据代理,没有set,get,所以真实dom不会生效
      //所以要用$set添加,这样vue就认可了
      //如果todo身上有isEdit属性,就相当于我们第二次点击编辑,可以直接修改,不需要调用set    todo.hasOwProperty('isEdit'),判断todo身上有没有该属性
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit=true
        console.log('todo身上有isEdit属性');
      }else{
        this.$set(todo, "isEdit", true);
        console.log('todo身上没有isEdit属性');
      }
    },
    //失去焦点回调(真正执行修改逻辑)
    //e为上方input里的$event
    handleBlur(todo,e){
      todo.isEdit=false
      console.log('upDateTodo',todo.id,e.target.value);
      //修改后更新id和title
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('upDateTodo',todo.id,e.target.value)
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
li:hover {
  background-color: bisque;
}
li:hover button {
  background-color: rgb(red, green, blue);
  display: block;
}
</style>