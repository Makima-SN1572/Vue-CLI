<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方DOM元素</button>
    <MySchool ref="sch"/>
  </div>
</template>

<script>
//引入school组件
import MySchool from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
        msg:'hello'
    }
  },
  components: {
    MySchool,
  },
  methods:{
    showDOM(){
        /* console.log(document.getElementById('title'));//当你用id时,可以获取dom元素 */
        console.log(this.$refs.title);//我们通过上方给html标签加的ref一层层寻找,这里this指向App组件的实例对象,在此之下的$ref下的title,找到我们需要的DOM元素
        console.log(this.$refs.btn);

        //这里我们给MySchool组件标签加ref,发现他的this指向了我们MySchool的组件的实例对象
        console.log(this.$refs.sch);
    }
  }
};
</script>

<style>
</style>