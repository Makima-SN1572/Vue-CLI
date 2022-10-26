<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      //请求前更新list的数据
      this.$bus.$emit("upDateList",{isFirst:false,isLoding:true,errMsg:'',users:[]});
      //vueResource用法
      this.$http.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功了");
          //请求成功后更新list的数据
          //isFirst:false后面就用不到变化了,所以我们就直接不写(会导致数据在组件里直接消失,所以要在List里用es6语法解决)
          this.$bus.$emit("upDateList",{isLoding:false,errMsg:'',users:response.data.items});
        },
        (error) => {
          console.log("请求失败了", error.message);
          //请求失败后更新list的数据
          this.$bus.$emit("upDateList",{isLoding:false,errMsg:error.message,users:[]});
        }
      );
    },
  },
};
</script>
