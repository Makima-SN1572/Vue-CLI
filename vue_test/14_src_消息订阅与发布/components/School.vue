<template>
  <div class="school">
    <h2>学校名称{{Name}}</h2>
    <h2>学校地址{{Address}}</h2>
  </div>
</template>

<script>
//订阅消息 school收数据
//引入pubsub
import pubsub from "pubsub-js";
export default {
    name:'MySchool',
    data() {
        return {
          Name:'东京大学tokoy',
          Address:'东京',
        }
    },
    /* methods:{
      demo(msgName,data){
        console.log('有人发布了hello消息,hello消息的回调函数执行了',msgName,this);
      }//你不用箭头函数拿到vc的this方法
    }, */
    mounted(){
       /* this.$bus.$on('hello',(data)=>{
        console.log('我是School组件,收到了数据',data);
      }) */


      //当挂载完毕,可以立刻   订阅消息  其中订阅消息的会笑函数有两个参数,第一个是消息名称,第二个才是我们需要的消息数据
      //pubsub.subscribe(消息名,回调函数),谁发布消息,那么与之相同的消息名就会触发回调函数,拿到数据
      this.pubId= pubsub.subscribe('hello',(msgName,data)=>{
        console.log('有人发布了hello消息,hello消息的回调函数执行了',msgName,data);
        console.log(this);//不用箭头函数这里的this就是unfined,用了就是vc
        //this.pubId= pubsub.subscribe('hello',this.name)不用箭头函数拿到vc的this
      })
    },
    beforeDestroy(){
      //this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)//我们取消订阅不能直接把消息名字写在这里,需要一个命名才行,所以要给你的订阅消息一个命名this.pubId,this是让这个取消订阅能够拿到这个id
    }
}
</script>

<style scoped>
.school{
  background-color: aquamarine;
  padding: 5px;
  margin-top: 30px;
}
</style>
