<template>
  <div>
    <MyCount/>
  </div>
</template>

<script>
import MyCount from "./components/Count.vue";
export default {
  name: "App",
  components: {
    MyCount,
  },
  mounted(){
    //console.log('App',this);
  }
};
</script>