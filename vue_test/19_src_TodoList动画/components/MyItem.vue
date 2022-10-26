<template>
  <!-- 只有一个transition用appear就行不需要: -->
  <!-- <transition name="todo" appear> -->
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
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" style="" @click="handleDelete(todo.id)">
      删除
    </button>
    <!-- 编辑的时候不显示按钮 -->
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      style=""
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
  <!-- </transition> -->
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
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
        console.log("todo身上有isEdit属性");
      } else {
        this.$set(todo, "isEdit", true);
        console.log("todo身上没有isEdit属性");
      }

      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },

    handleBlur(todo, e) {
      todo.isEdit = false;
      console.log("upDateTodo", todo.id, e.target.value);

      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("upDateTodo", todo.id, e.target.value);
    },
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
/* .todo-enter-active{
    animation: maki 1s;
}

.todo-leave-active{
    animation: maki 1s reverse;
}

@keyframes maki {
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0px);
    }
} */
</style>