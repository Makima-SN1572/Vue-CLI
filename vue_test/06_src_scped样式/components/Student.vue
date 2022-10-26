<template>
  <div class="demo">
    <h2>学生姓名{{Name}}</h2>
    <h2 class="qwe">学生性别{{Sex}}</h2>
  </div>
</template>

<script>

export default {
    name:'MyStudent',
    data() {
        return {
          Name:'makima',
          Sex:'女'
        }
    },
}
</script>
<style scoped>
.demo{
  background-color: burlywood;
}
</style>
