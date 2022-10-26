<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 你想让谁有动画效果,你就给你那个标签用transition包裹起来 -->
    <!-- :appear="true",最开始就有一个为true的动画效果,要加:,不然true就是一个字符串,不是布尔值 -->
    <!-- transition在vue解析时会脱掉,和template一样 -->
    <!-- transition的name属性,可以在多个不同动画效果的transition里分别控制 -->
    <transition name="moko" :appear="true">
        <h1 v-show="isShow">makima</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'MyTest',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
h1{
    background-color: aqua;
}
/* 这里的样式类名是vue定死的,进入时激活v-enter-active,离开时激活v-leave-active ,你要是给你的transition起名字,就要把v改成你的名字*/
.moko-enter-active{
    animation: maki 1s;
}

.moko-leave-active{
    animation: maki 1s reverse;
}

@keyframes maki {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>