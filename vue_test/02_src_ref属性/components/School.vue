<template>
  <div id="demo">
    <h2>学校名称{{SchoolName}}</h2>
    <h2>学校地址{{Address}}</h2>
  </div>
</template>

<script>

export default {
    name:'MySchool',
    data() {
        return {
            SchoolName:'东京大学',
            Address:'东京'
        }
    },

}
</script>

<style>
#demo{
    background-color: aquamarine;
}
</style>