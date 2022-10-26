<template>
  <div>
    <h2>学生姓名{{Name}}</h2>
    <h2>学生性别{{Sex}}</h2>
    <input type="text" v-fbind:value="Name">
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
