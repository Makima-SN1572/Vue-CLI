<template>
  <div>
    <MyCount/>
    <hr>
    <MyPerson/>
  </div>
</template>

<script>
import MyCount from "./components/Count.vue";
import MyPerson from "./components/Person.vue";
export default {
  name: "App",
  components: {
    MyCount,
    MyPerson
  },
  mounted(){
    //console.log('App',this);
  }
};
</script>