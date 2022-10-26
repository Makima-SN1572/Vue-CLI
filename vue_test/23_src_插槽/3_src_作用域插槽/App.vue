<template>
  <div class="container">
    <!-- 此处需要把Category组件里的数据,在app组件里使用 -->
    <!-- 想要使用插槽里传过来的数据必须用template标签包裹起来 -->
    <!-- 这里是插槽的使用者 -->
    <MyCategory title="游戏">
      <template scope="maki">
        <!-- 这里没有games数据,但你通过插槽把数据传了过来 -->
        <!-- 这里你用插值语法{{maki}}就会发现maki是你需要的整个数据对象,所以你到的数据是里面的games,maki.games -->
        <ul>
          <li v-for="(g, index) in maki.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </MyCategory >
    <!-- es6解构赋值写法 -->
    <!-- 传过来的是一个属性名为games的对象，解构赋值{games}相当于let {games} = {'games' : [数据] }，这样直接用games就相当于直接用[数据] -->
    <MyCategory title="游戏">
      <template scope="{games}">
        <ol>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ol>
      </template>
    </MyCategory>
    <MyCategory title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
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
};
</script>
<style lang="css" scoped>
.container {
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>