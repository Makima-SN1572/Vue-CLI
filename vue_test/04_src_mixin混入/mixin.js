//当我们发现两个儿子组件里代码有相同的部分,那么我们就可以用mixin混入使用
//export分别暴露
export const mixin = {
    methods:{
        ShowName(){
          alert(this.Name)
        }
      },
      mounted() {
        console.log('所有组件挂载完毕');
      },
}
/* 当我们给mixin混入加入数据时,就会发现被混入的组件里的数据就会出现mixin混入的数据 */
export const mixin2 = {
    data() {
        return {
            x:100,
            y:200
        }
      }
}
//export default默认暴露