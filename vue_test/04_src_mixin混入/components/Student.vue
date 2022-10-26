<template>
  <div>
    <h2 @click="ShowName">学生姓名{{Name}}</h2>
    <h2>学生性别{{Sex}}</h2>
  </div>
</template>

<script>
//引入mixin混入
//import{mixin,mixin2} from '../mixin'
export default {
    name:'MyStudent',
    data() {
        return {
          Name:'makima',
          Sex:'女'
        }
    },
   // mixins:[mixin,mixin2]
}
</script>
