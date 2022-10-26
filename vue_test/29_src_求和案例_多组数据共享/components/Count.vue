<template>
  <div>
    <!-- 这里用对象写法时,记得换差值语法里的命名 -->
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和10倍为:{{ bigSum }}</h1>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h4 style="color:skyblue">下方组件的总人数是:{{personList.length}}</h4>
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    ////该组件共享另一个组件的数据,这样就实现了数据的共用"personList"
    ...mapState(["sum", "school", "subject", "personList"]),

    ...mapGetters(["bigSum"]),
  },
  methods: {
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>
<style>
button {
  margin-left: 5px;
}
</style>
