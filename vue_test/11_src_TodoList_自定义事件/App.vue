<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" /><!-- 我们利用自定义事件,直接自定义一个事件然后通过父给子偷偷调用的函数,直接在子组件里利用父的函数,进行事件触发,数据传递 -->
        <!-- 我们把List组件里的data数据拿过来,实现父亲组件掌握数据,再在这里传入List组件(:todos="todos"[冒号是为了单项绑定判断为表达式进行解析]) -->
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" /><!-- todos是对象,别自定义 -->
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  //偷来List组件的数据,给你爹用
  data() {
    return {
      //去本地存储那里拿数据
      //如果JSON.parse(localStorage.getItem('todos'))有值就用他,没有数据就返回一个空数组,防止返回的是null
      todos:JSON.parse(localStorage.getItem('todos')) || []
    };
  },

  //子传父,父组件需要事先给子组件一个函数调用,addTodo
  //此时我们将一个对象子组件新添加的todoObj{}用nushift添加在data数据最前面,然后因为我们用的是unshift所以Vue会帮我们解析,Vue一看,我草this.todo他变了,需要重新解析,此时重新解析就会将数据里新添加的数据解析进去,然后就给List组件,List收到新数据后他也会进行解析,此时虚拟DOM会进行对比,因为我们用的是id,所以重复的数据不变,新数据加到前面
  methods: {
    //秉着数据在哪,对数据的操作就在哪的方法,所以我们就把对数据的所有操作写在App组件里
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      //给所有的todo对象遍历,如果他的id等于我们item传进去的id那么就让他的done状态取反
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除一个todo
    deleteTodo(id) {
      //这里因为filter并不会直接修改原数组,所以我们让他等于数组,达到修改的效果
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //全选或全不选
    checkAllTodo(done) {
      //我们拿到所有的todo去遍历,然后就是让他们全部等于我们的形参done
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch:{

    //监视todo变化,添加数据到本地储存
    //深度监视,监视done状态
    todo:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
};
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>