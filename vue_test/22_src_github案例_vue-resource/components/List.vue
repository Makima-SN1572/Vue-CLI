<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">你好,欢迎使用</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoding">正在加载中,请稍后...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">出错了:{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {
        //因为我们数据太多,所以我们以对象的形式包起来,这样在赋值更新数据时,就不需要一个一个写,直接调用这个数据对象就行
      info: {
        //是否为初次展示
        isFirst: true,
        //是否为加载状态
        isLoding: false,
        //请求错误状态
        errMsg: "",

        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("upDateList", (dataObj) => {
      console.log("List组件收到数据", dataObj);
      //收到数据,存在自身
      //这里用到了es6语法...,目的是是因为我们在Search组件里方法里写更新list时,为了省事把其中一个数据在后面不变时就给忽略不写了,导致后面传来的数据少了哪一个忽略的数据,所以我们这里把最开始的...this里的数据摊在这里,然后再把...dataObj里的数据一样摊在这里,在总数据不变的情况下后面的数据会更新到前面的数据里,这样就可达到更新代替,但不会删除数据的效果
      this.info = {...this.info,...dataObj}
      console.log(this);
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>