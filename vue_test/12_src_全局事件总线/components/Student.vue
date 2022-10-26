<template>
  <div class="student">
    <h2>学生姓名{{Name}}</h2>
    <h2>学生性别{{Sex}}</h2>
    <button @click="sendStudentName">点我把学生名给school,实现兄弟间传递数据</button>
  </div>
</template>

<script>

export default {
    name:'MyStudent',
    data() {
        return {
          Name:'makima',
          Sex:'女',
        }
    },
    methods:{
      sendStudentName(){
        this.$bus.$emit('hello',this.Name)//传hello事件
      }
    }
}
</script>
<style scoped>
.student{
  background-color: burlywood;
  padding: 5px;
  
}
</style>
