<template>
  <div>
    <div class="row">
      <MyBanner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们是用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签实现录取由其的切换 -->
          <!-- active-class="active"增加激活属性active -->
          <!-- router-link会自动转成a标签 -->
          <!-- :to="{name:'guanyu'},通过路由名字去找 -->
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置[有点像插槽] -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyBanner from './components/Banner.vue'
export default {
  name: "App",
  components: {
    MyBanner
  },
};
</script>