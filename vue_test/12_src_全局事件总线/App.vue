<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <MySchool/>
    <MyStudent/>
  </div>
</template>

<script>
import MyStudent from "./components/Student.vue";
import MySchool from "./components/School.vue";
export default {
  name: "App",
  components: {
    MyStudent,
    MySchool,
  },
  data() {
    return {
      msg: "hello",
      studentName:''
    };
  },
};
</script>
<style scoped>
.app {
  background-color: aqua;
  padding: 5px;
}
</style>