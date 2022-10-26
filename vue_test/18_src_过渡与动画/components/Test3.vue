<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- 在transition-group里面配置你的动画效果, enter-active-class进入动画效果
    leave-active-class离开动画效果-->
    <transition-group 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
    :appear="true">
      <h1 v-show="isShow" key="1">makima</h1>
      <h1 v-show="isShow" key="2">你好</h1>
      <h1 v-show="!isShow" key="2">你好</h1><!-- 可以适用于互斥场景 -->
    </transition-group>
  </div>
</template>

<script>
//npm install animate.css,下载
import 'animate.css'
export default {
  name: "MyTest3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
/* 过渡 */
h1 {
  background-color: aqua;
}

</style>