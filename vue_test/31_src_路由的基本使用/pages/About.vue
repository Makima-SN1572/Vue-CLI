<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "MyAbout",
  mounted() {
    console.log("About组件挂载完毕", this);
    //我们这里是证明所有路由只受一个路由器管理,但其路由组件自身的路由是自己的
    //给window上加个路由与路由器,查看是不是不同路由组件的路由器与路由是不同的
    window.aboutRouter = this.$router;
    window.aboutRoute = this.$route;
    /* aboutRoute===homeRoute
          false
       aboutRouter===homeRouter
          true
     */
  },
  beforeDestroy() {
    console.log("About组件即将被销毁");
  },
};
</script>

<style>
</style>