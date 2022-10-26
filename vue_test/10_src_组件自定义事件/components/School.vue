<template>
  <div class="school">
    <h2>学校名称{{Name}}</h2>
    <h2>学校地址{{Address}}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>

export default {
    name:'MySchool',
    data() {
        return {
          Name:'东京大学tokoy',
          Address:'东京',
        }
    },
    //props接收事件
    props:['getSchoolName'],
    methods:{
      sendSchoolName(){
        //利用props里接收的事件，给他一个数据，再让他在父组件里的函数调用这个数据
        this.getSchoolName(this.Name)
      }
    }
}
</script>

<style scoped>
/* scoped为局部的,他会给你的标签加一个随机不重复的命名防止冲突 */
.school{
  background-color: aquamarine;
  padding: 5px;
  margin-top: 30px;
}
</style>
