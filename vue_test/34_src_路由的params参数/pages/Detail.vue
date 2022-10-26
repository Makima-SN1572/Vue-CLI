<template>
    <ul>
        <!-- 数据挂载于$route.params.id //params传参-->
        <li>消息编号:{{$route.params.id}}</li>
        <li>消息标题:{{$route.params.title}}</li>
    </ul>
</template>

<script>
export default {
  name: "MyDetail",
  mounted(){
    console.log(this.$route);//这里就可以发现数据的位置,从而利用插值语法去取
  }

};
</script>

<style>
</style>