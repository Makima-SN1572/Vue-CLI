<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 作用域插槽;这里用单项绑定直接把games的数据传递给了插槽的使用者App组件 ,实现数据子传父-->
    <slot :games="games">默认内容</slot>
    <!-- 作用域插槽也可以有名字 -->
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: aqua;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: antiquewhite;
}
</style>