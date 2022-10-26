<template>
  <div class="demo">
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
}
</script>

<style scoped>
/* scoped为局部的,他会给你的标签加一个随机不重复的命名防止冲突 */
.demo{
  background-color: aquamarine;
}
</style>
