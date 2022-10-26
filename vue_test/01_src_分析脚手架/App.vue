<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School />
    <Student />
  </div>
</template>

<script>
//App是所有组件的汇总,所以我们要引入所有组件到这里
//引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>