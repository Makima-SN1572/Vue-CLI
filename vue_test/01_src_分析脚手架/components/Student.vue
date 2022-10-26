<template>
  <!-- 组件的结构 -->
  <div class="demo1">
    <h2>学生姓名{{ name }}</h2>
    <h2>年龄{{ age }}</h2>
    <button @click="showName">点我显示学生名</button>
  </div>
</template>

<script>
//组件交互相关的代码(数据,方法等等)
export default {
  name: "StudentName",
  data() {
    return {
      name: "makima",
      age: 20,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
//默认暴露(只暴露一个)export default +组件简写
</script>

<style>
/* 组件的样式 */
.demo1 {
  background-color: orange;
}
</style>