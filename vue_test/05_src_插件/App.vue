<template>
  <div>
    <MyStudent/>
    <MySchool/>
    </div>
</template>

<script>
//引入school组件
import MySchool from "./components/School.vue"
import MyStudent from "./components/Student.vue"
export default {
  name: "App",
  components: {
    MyStudent,
    MySchool
  },
};
</script>
