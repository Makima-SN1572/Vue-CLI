<template>
  <div>
    <MyStudent/>
    <MySchool/>
    </div>
</template>

<script>
//引入school组件
//这里css样式后来者居上,所以当class一样时,就会以后来者为准
//在组件的style标签里加入 scoped 即可避免这种情况
import MyStudent from "./components/Student.vue"
import MySchool from "./components/School.vue"
export default {
  name: "App",
  components: {
    MyStudent,
    MySchool
  },
};
</script>
<!-- 这里style用scoped会只能App组件自己的标签才能使用,不加就会所有组件以他为准,全部用App的样式 -->
<!-- 这里用less来写,可以嵌套,计算写法 -->
<style lang="less">
.demo{
  color: #fff;
  .qwe{
    font-size: 40px;
  }
}

</style>