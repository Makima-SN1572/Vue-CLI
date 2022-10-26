<template>
  <ul class="todo-main">
    <!-- 如果你的input是checkbox,并且你的v-model绑了个布尔值,那么这个布尔值就能影响你的数据变化 ,
      你看todo是个对象,你利用了双向数据绑定,从而引起了todo对象里的done值  其实我们是跳过了vue的监视,因为这个布尔值是藏在对象里,所以我们一改其布尔值,就改了props里面的值,vue不会监视props里面小的变化,所以就偷偷饶了过去-->
    <!-- <input type="checkbox" v-model="todo.done"/> 这行代码不需要什么父传子,子传父那一套,直接改这么一条就行-->
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  //数据都给爹组件了,所以这里只要做的事就是将数据拿到
  props: ["todos", "checkTodo",'deleteTodo'],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>