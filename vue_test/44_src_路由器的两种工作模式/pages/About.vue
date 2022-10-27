<template>
  <h1>这里是About组件</h1>
</template>

<script>
export default {
  name: "MyAbout",
  //组件内路由守卫没有前后置这种概念
  //通过路由规则,进入该组件时被调用
  //这个进入是当你从一个路由组件点击跳转后到达进入这个组件之前时就会调用
  beforeRouteEnter (to, from, next) {
    console.log('About---beforeRouteEnter',from,to);
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'makima') {
            next()
        } else {
            alert('学校名不是makima，无权限查看')
        }
        //这里不是前两者的路径就直接放行
    } else {
        next()
    }
  },
    //通过路由规则,离开该组件时被调用(离开是指你已经进入了这个路由组件,在这个路由组件里面点击了路由组件的跳转事件,那么在离开这个路由组件的时候就会被调用,[离开是在进入下一个路由组件之前])
    //简单来说就是beforeRouteLeave的from是beforeRouteEnter的to
  beforeRouteLeave (to, from, next) {
    console.log('About---beforeRouteLeave',from,to);
    next()
    //这里你要是想实现标题的改变的话就只能去解开后置路由守卫的代码了,这里写标题改变是效果是不行的,他只能在你离开该路由组件的时候稍微显示一下标题
  }
};
</script>

<style>
</style>