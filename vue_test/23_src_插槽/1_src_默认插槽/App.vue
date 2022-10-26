<template>
  <div class="container">
    <!-- 这里组件标签里的标签vue会帮你解析,但vue不会放到dom上 -->
    <MyCategory title="美食" >
       <img src="https://pic.yitu.cn/d/file/20181109/7f063eae66b7c0eb8df69a6b1802971b.png?x-oss-process=style/tudatu" alt="">
    </MyCategory>
    <MyCategory title="游戏" >
      <ul>
      <li v-for="(g,index) in games" :key="index">{{g}}</li>
    </ul>
    </MyCategory>
    <MyCategory title="电影" > 
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from "./components/Category.vue";
export default {
  name: "App",
  components: {
    MyCategory,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾"],
      games: ["红色警戒", "穿越火线", "劲舞团"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》"],
    };
  },
};
</script>
<style lang="css" scoped>
.container {
  display: flex;
  justify-content: space-around;
}
img{
width: 100%;
}
video{
  width: 100%;
}
</style>