<template>
  <div>
    <!-- this.$store.state.sum,模板里会直接用vc里的东西,不需要加this -->
    <h1>当前求和为:{{ $store.state.sum }}</h1>
    <h1>当前求和10倍为:{{ $store.getters.bigSum }}</h1>
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
export default {
  name: "MyCount",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    //我们这里直接越过action,不用dispatch,到mutations,用commit提交我们的东西
    increment() {
      this.$store.commit('JIA',this.n)
    },
    decrement() {
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd() {
 
        this.$store.dispatch('jiaOdd',this.n)
      
    },
    incrementWait() {

        this.$store.dispatch('jiaWait',this.n)

    },
  },
};
</script>
<style>
button {
  margin-left: 5px;
}
</style>
