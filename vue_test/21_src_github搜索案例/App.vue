<template>
    <div class="container">
      <MySearch />
      <MyList />
    </div>
</template>

<script>
import MyList from "./components/List.vue";
import MySearch from "./components/Search.vue";
export default {
  name: "App",
  components: {
    MyList,
    MySearch,
  },
};
</script>
<style>

</style>