<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- 记住,这里的isAll是你自己在这个组件里计算出来的,不是传过来的props值,所以不需要担心会出现不能用的现象,此时input类型是checked,并且双向绑定的绑定为布尔值,就直接用 -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
     <!--  <span>已完成{{ doneTotal }}</span> / 全部{{ todos.length }} -->
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],//"checkAllTodo","clearAllTodo"已经自定义了,不需要props接收
  computed: {
    total(){
      return this.todos.length
    },
    doneTotal() {
      /*       let i = 0
      this.todos.forEach((todo)=>{
        if (todo.done) {
          i++
        }
      }) 
      return i*/

      //reduce写法  es6
      //现在开始解释pre(上一次的返回值)是什么流程:  首先我们设置pre的默认值为0,然后我们进行调用,调用次数为todos的对象数,首先第一次调用pre,那么因为他的默认值为0,所以打印值为0,但我们随后进行返回+1,所以此时返回值是1,然后我们第二次调用pre,因为pre是上一次的返回值,所以刚开始是1,然后打印出来是1,然后继续返回后+1,所以此时返回值是2,然后到第三次,打印值为2,返回值为3,然后整个reduce会取最后的返回值,所以出来的数字就是3
      /*current为当前的值,两个参数一个是上一次的返回值,一个是当前的值
      const x = this.todos.reduce((pre, current) => {
        console.log("打印值", pre, current);
        //return pre + 1
        return pre + (current.done ? 1 : 0);//条件判断当前的done是不是true,是就+1
      }, 0); 
      所以你此时打印x就是done为true的值*/
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    //此条代码为不是双向绑定时使用
    /* isAll(){
      return this.doneTotal === this.total && this.total >0
    } */
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total >0
      },
      set(value){
        //this.checkAllTodo(value)
        this.$emit('checkAllTodo')
      }
    }
  },
  methods:{
    //此条代码为不是双向绑定时使用
    /* checkAll(e){
      this.checkAllTodo(e.target.checked)
    } */
    clearAll(){
      //this.clearAllTodo()
      this.$emit('clearAllTodo')
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>