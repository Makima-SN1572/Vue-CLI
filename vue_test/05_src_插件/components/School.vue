<template>
  <div>
    <h2>学校名称{{Name | mySlice}}</h2>
    <h2>学校地址{{Address}}</h2>
    <button @click="test">点我测试hello</button>
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
    methods:{
      test(){
        this.hello()
      }
    }
}
</script>
