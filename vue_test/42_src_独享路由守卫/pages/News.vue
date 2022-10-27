<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  //这里是组件名,keep-alive要用的指定组件名字就是他
  name: "MyNews",
  data() {
    return {
      opacity: 1,
    };
  },
  /* mounted(){
      this.timer = setInterval(()=>{
        this.opacity -= 0.01
        if(this.opacity <= 0){
          this.opacity = 1
        }
      },16) 
    },
    beforeDestroy(){
      clearInterval(this.timer)
    } */
  //路由组件生命周期钩子
  //activated激活
  activated() {
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log('定时器在工作');
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  //deactivated失活
  deactivated() {
    console.log("News组件被失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>
