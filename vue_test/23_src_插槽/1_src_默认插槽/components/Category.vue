<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽:插槽,可以告诉vue组件里的东西就往这里面塞,于是vue在app组件里解析的标签就会放在插槽里 -->
    <slot>默认值,如果使用者不传东西,就显示这行文字</slot>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props:['listData','title']
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