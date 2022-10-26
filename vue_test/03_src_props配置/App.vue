<template>
  <div>
    <MyStudent StudentName="makima" :Age=18 Sex="女"/>
    <MyStudent StudentName="moko" :Age=20 Sex="女"/><!-- 这里我们就发现组件在复用,而数据在动态变化 -->
    <MyStudent StudentName="maki" :Age=18+1 Sex="女"/>
    <!-- 这里要深入解释一下为什么加了:就会是计算后的结果
        当我们的props是简单接收时,当你不加:时Age=18这里输出的18是一个字符串,所以你就算后面+1也只会变成字符串的拼接,当你加了:后v-bind就把后面的东西当成了表达式,返回的就是表达式的计算结果-->
       <!--  <MyStudent StudentName="sakura" Sex="女"/> --><!-- 这里就是没有传Age数据,导致启用了默认值 -->
    </div>
</template>

<script>
//引入school组件
import MyStudent from "./components/Student.vue";
export default {
  name: "App",
  components: {
    MyStudent,
  },
};
</script>

<style>
</style>