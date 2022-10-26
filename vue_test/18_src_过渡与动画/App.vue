<template>
  <div>
    <MyTest />
    <MyTest2 />
    <MyTest3 />
  </div>
</template>

<script>
import MyTest from "./components/Test.vue";
import MyTest2 from "./components/Test2.vue";
import MyTest3 from "./components/Test3.vue";

export default {
  name: "App",
  components: {
    MyTest,
    MyTest2,
    MyTest3
  },

  data() {
    return {};
  },
};
</script>
<style>
</style>