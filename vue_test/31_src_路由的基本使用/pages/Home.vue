<template>
  <h2>我是Hmoe的内容</h2>
</template>

<script>
export default {
  name: "MyHome",
  mounted(){
    console.log('Home组件挂载完毕',this);
    window.homeRouter = this.$router;
    window.homeRoute = this.$route;
  },
  beforeDestroy(){
    console.log('Home组件即将被销毁');
  }
};
</script>

<style>
</style>