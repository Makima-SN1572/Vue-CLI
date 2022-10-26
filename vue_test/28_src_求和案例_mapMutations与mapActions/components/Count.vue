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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前就和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),

    ...mapGetters(["bigSum"]),
  },
  methods: {
    //同样我们也有针对action和mutation的map写法
    //插值语法记得传参(n),告诉他们我们需要的参数



    /*     increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */
    ///////////////////////////////////////////////
    /* increment() {
      this.$store.commit("JIA", this.n);
    },
    //这里我们想让mapMutations生成和我们上方一样的写法,但是由于我们的increment是不传参数的,所以就导mapMutations自己去找参数,那么他找的就是event,此时我门这里是一个鼠标事件,结果就变成了我们的JIA函数+上了一个鼠标事件,顺便还导致了不合法的运算结果bigSum直接NaN
    increment(event) {
      this.$store.commit("JIA", event);
    }, */
    //解决方法就是在插值语法里传我们需要的参数increment(n)
    ///////////////////////////////////////////////////////
    //借助mapMutations生成对应计算属性,方法中会调用commit去联系mutations(对象的写法)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    //借助mapMutations生成对应计算属性,方法中会调用commit去联系mutations(数组的写法)插值语法记得改成JIA,JIAN
    //...mapMutations(["JIA","JIAN"]),
    /////////////////////////////////////////////////////////
    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    }, */
     //借助mapActions生成对应计算属性,方法中会调用dispatch去联系mapActions(对象的写法)
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
     //借助mapActions生成对应计算属性,方法中会调用dispatch去联系mapActions(数组的写法)//记得改差值语法名字
    //...mapActions(['jiaOdd','jiaWait'])
  },
};
</script>
<style>
button {
  margin-left: 5px;
}
</style>
