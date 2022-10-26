<template>
  <div class="container">
    <!-- 这里组件标签里的标签vue会帮你解析,但vue不会放到dom上 -->
    <MyCategory title="美食">
      <img
        slot="center"
        src="https://pic.yitu.cn/d/file/20181109/7f063eae66b7c0eb8df69a6b1802971b.png?x-oss-process=style/tudatu"
        alt=""
      />
      <!-- slot="footer",把该标签放在名为footer的插槽里 -->
      <a slot="footer" href="http://www.bilibili.com">更多美食</a>
    </MyCategory>
    <MyCategory title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.bilibili.com">游戏</a>
        <a href="http://www.bilibili.com">单机游戏</a>
      </div>
    </MyCategory>
    <MyCategory title="电影">
      <video slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- 这里你用了template标签,那么你就可以使用v-slot:插槽名 这种vue2.6的写法-->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.bilibili.com">经典</a>
          <a href="http://www.bilibili.com">热门</a>
          <a href="http://www.bilibili.com">推荐</a>
        </div>
        <h4>欢迎前来观看</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>