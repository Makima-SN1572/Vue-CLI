<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称{{ SchoolName }}</h2>
    <h2>学校地址{{ address }}</h2>
    <button @click="showName">点我显示学校名</button>
  </div>
</template>

<script>
//组件交互相关的代码(数据,方法等等)
export default {
  name: "SchoolName",
  data() {
    return {
      SchoolName: "东大",
      address: "东京",
    };
  },
  methods: {
    showName() {
      alert(this.SchoolName);
    },
  },
};
//默认暴露(只暴露一个)export default +组件简写
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>