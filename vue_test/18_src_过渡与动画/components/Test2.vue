<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 你想让谁有动画效果,你就给你那个标签用transition包裹起来 -->
    <!-- :appear="true",最开始就有一个为true的动画效果,要加:,不然true就是一个字符串,不是布尔值 -->
    <!-- transition在vue解析时会脱掉,和template一样 -->
    <!-- transition的name属性,可以在同一个组件多个不同动画效果的transition里分别控制 -->
    <!-- transition只能使用一个元素， -->
    <!-- <transition name="moko" :appear="true">
      <h1 v-show="isShow">makima</h1>
    </transition> -->

    <!-- transition-group可以使用多个元素 ,但是必须每个都有独立的key值-->
    <transition-group name="moko" :appear="true">
      <h1 v-show="isShow" key="1">makima</h1>
      <h1 v-show="isShow" key="2">你好</h1>
      <h1 v-show="!isShow" key="2">你好</h1><!-- 可以适用于互斥场景 -->
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "MyTest2",
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
/* .moko-enter  进入的起点,离开的终点 */
.moko-enter,
.moko-leave-to {
  transform: translateX(-100%);
}


.moko-enter-active,.moko-leave-active{
    transition: 1s linear;
}


/* .moko-enter-to  进入的终点,离开的起点 */
.moko-enter-to,
.moko-leave {
  transform: translateX(0);
}





/* .moko-enter  离开的起点 */
/* .moko-leave{
   transform: translateX(0);
} */
/* .moko-enter-to  离开的终点 */
/* .moko-leave-to{
    transform: translateX(-100%);
} */
</style>