<template>
  <div>
    <!-- 这里用对象写法时,记得换差值语法里的命名 -->
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和10倍为:{{ bigSum }}</h1>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前就和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
//为了简化插值语法,我们利用mapState来帮我们写重复的部分,我们把需要改变的部分告诉他,让他帮我们写/只能帮我们生成带有state的代码
//以此类推,还有mapgetters
import { mapState,mapGetters } from 'vuex';
export default {
  name: "MyCount",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed:{
    //这里我们可以利用计算属性去简化插值语法,却发现代码重复性很高,只有函数命名和最后要的数据是我们要改变的,所以我们用mapstate
    /* he/sum(){
      return this.$store.state.sum
    } 
     xuexiao/school(){
      return this.$store.state.xuexiao
    } 
     xueke/subject(){
      return this.$store.state.xueke
    } */
    //借助mapstate生成计算属性,从state中读取数据(对象写法)
    //es6语法,扩展运算符,把mapstate里面的数据依次取出,展开放在computed中
    //...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

    //当计算属性和数据命名相同时   数组写法
    ...mapState(['sum','school','subject']),
    /////////////////////////////////////////////////////////
    
    /* bigSum(){
      return this.$store.getters.bigSum
    } */
    //借助mapgetters生成计算属性,从getters中读取数据(数组写法)
    ...mapGetters(['bigSum'])
    //借助mapgetters生成计算属性,从getters中读取数据(对象写法)
    //...mapGetters({bigSum:'bigSum'})

  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted(){
  }
};
</script>
<style>
button {
  margin-left: 5px;
}
</style>
