<template>
  <div class="school">
    <h2>学校名称{{Name}}</h2>
    <h2>学校地址{{Address}}</h2>
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
    mounted(){
       this.$bus.$on('hello',(data)=>{
        console.log('我是School组件,收到了数据',data);
      })
    },
    beforeDestroy(){
      this.$bus.$off('hello')//在销毁之前最好把傀儡的自定义事件都解绑
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
