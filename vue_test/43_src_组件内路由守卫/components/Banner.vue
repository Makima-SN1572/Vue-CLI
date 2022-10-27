<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="go">测试go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBanner",
  methods:{
    back(){
      //下面back是路由器原型身上自带的,上面的back只是点击事件一个函数名随便改
      //back后退
      this.$router.back()
    },
    forward(){
      //forward前进
      this.$router.forward()
    },
    go(){
      //go,传的是数字,正数就前进几步,同理负数就是后退
      this.$router.go(-1)
    }
  }
};
</script>

<style>
</style>