<template>
    <ul>
        <!-- 数据挂载于$route.query.id //query传参-->
        <li>消息编号:{{$route.query.id}}</li>
        <li>消息标题:{{$route.query.title}}</li>
    </ul>
</template>

<script>
export default {
  name: "MyDetail",

};
</script>

<style>
</style>