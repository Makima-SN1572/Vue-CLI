<template>
  <div>
    <h2 @click="ShowName">学校名称{{Name}}</h2>
    <h2>学校地址{{Address}}</h2>
  </div>
</template>

<script>
//局部混入
//import{mixin,mixin2} from '../mixin'
export default {
    name:'MySchool',
    data() {
        return {
          Name:'东京大学',
          Address:'东京',
          x:500
          /* 当我们在自己本身组件的数据里加入与mixin相同的数据时,就会发现该数据会根据自己组件本身的数据进行使用覆盖 */
        }
    },
    /* 当我们给mixin混入和自身组件分别加入生命周期时,就会发现这玩意不会就近选择自身组件的生命周期进行覆盖使用,反而两个都会使用,而且mixin的生命周期还优先执行 */
    mounted() {
        console.log('School组件挂载完毕');
      },
   // mixins:[mixin,mixin2]
}
</script>
