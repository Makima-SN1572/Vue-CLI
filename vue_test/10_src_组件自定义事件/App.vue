<template>
  <div class="app">
    <h1>{{ msg }},学生的姓名是{{studentName}}</h1>

    <!-- 自定义事件适用于子传父,你是在student标签上写自定义事件, 自定义传的数据是从子组件过来的-->
    <!-- 通过v-on绑定maki事件,让改事件绑定在myschool的vc上,触发该事件就会触发getStudentName   (你给谁绑的事件,你就找谁触发去)-->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据(第一种写法,使用v-on或者@) -->
    <!--  <MyStudent v-on:maki="getStudentName"/>-->
      <!-- <MyStudent @maki="getStudentName"/> 简写-->
      <!-- <MyStudent @maki.once="getStudentName"/> --><!-- 只能用一次 -->
      <!-- MyStudent @maki="getStudentName" @demo="m1"/> -->
      

      
      <!-- 通过父组件给子组件传递函数类型的props实现,子传父数据 -->
      <MySchool :getSchoolName="getSchoolName"/>



      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据(第二种写法,使用ref) -->
      <!-- <MyStudent ref="MyStudent" @click="show"/> -->


      <!-- <MyStudent ref="MyStudent" @click="show"/> --><!-- @click="show"被当成自定义事件了,需要给student里this.$emit('click')加自定义 -->

      <MyStudent ref="MyStudent" @click.native="show"/><!-- 加上native就会被认为是原生的事件,就不是自定义了点击事件就会被直接交给student里的div -->
  </div>
</template>

<script>
//引入school组件
//这里css样式后来者居上,所以当class一样时,就会以后来者为准
//在组件的style标签里加入 scoped 即可避免这种情况
import MyStudent from "./components/Student.vue";
import MySchool from "./components/School.vue";
export default {
  name: "App",
  components: {
    MyStudent,
    MySchool,
  },
  data() {
    return {
      msg: "hello",
      studentName:''
    };
  },
  methods:{
    getSchoolName(name){
      console.log('app收到了学校名',name);
    },
    //此处利用es6语法...params,我们把name参数的数据单独拿出来,剩下的数据就全部放在一个数组里(此处params就是个名字,随便改)
   /*  getStudentName(name,...params){
      console.log('app收到了学生名',name,params);
      this.studentName = name //这里我们让该组件的studentName数据,等于我们收到的student的数值,此时就可以拿到我们想要的效果
    } */
    m1(){
      console.log('demo事件被触发了');
    },
    show(){
      alert('213')
    }
  },
  mounted(){
    //this[vc].$refs.MyStudent.$on[绑定事件]('maki'[事件名字],this.getStudentName[触发事件的函数])
    /* this.$refs.MyStudent.$on('maki',this.getStudentName) */////这里的代码需要和 方法里的getStudentName一起使用,因为这里的this指向不是app而是student,而你在这里调用了方法里的函数,所以vue会帮你把this调回app
    //只触发一次
    //this.$refs.MyStudent.$once('maki',this.getStudentName)
    //用ref的好处就是可以利用mounted生命周期,去使用各种功能,
    /* setTimeout(()=>{
      this.$refs.MyStudent.$on('maki',this.getStudentName)
    },3000) */
    this.$refs.MyStudent.$on('maki',(name,...params)=>{
      console.log('app收到了学生名',name,params);
      console.log(this);
      this.studentName = name
    })//因为我们并没有将方法里的函数调用,所以vue不会帮我们把this调回app,所以我们需要箭头函数,让箭头函数的特性去寻找上一级this,就找到了app
  }
};
</script>
<style scoped>
.app {
  background-color: aqua;
  padding: 5px;
}
</style>