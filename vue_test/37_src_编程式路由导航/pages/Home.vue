<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- to="/home/news" 跳转路径二级路由带着父路由 -->
          <!-- replace,(:replace="true")开启代替模式,浏览器里的历史存储就会因为你的组件跳转把当前在栈顶的记录给替换掉(替换掉当前的记录),这样你就发现浏览器不能按<-返回了,正常情况下是push模式,浏览器记录会随着你的组件跳转不断往栈里面一次一次往上加记录(栈就类似一口井,下面封死,数据记录被上往下扔东西),记录越堆越多,形成压栈 -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
};
</script>

<style>
</style>