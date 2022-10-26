<template>
  <div>
   <button @click="getStudent">获取学生信息</button>
   <button @click="getCar">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods:{
    getStudent(){
      //跨域必须主机与服务器这三样相同:  协议名，主机名，端口号
      //服务器会收到主机的请求,也会发出去响应,但不给你数据
      //解决方法
      //1.cors   发现你跨域后,服务器会给你个响应,但cors会在响应时携带特殊的响应头,浏览器会发现虽然跨域了,但服务服务器有响应头,就会把数据给你
      //2.jsonp  是script里的src,不受同源限制特性办到的,只能解决get请求
     
      // 配置服务器                  1.配置类方式(实现WebMvcConfigurer)  2.使用@CrossOrigin注解  3.使用nginx反向代理解决跨域  4.Vue中配置代理服务器
      //本地和代理服务器相同地址， 但是经过代理服务器和服务器传递数据,不需要考虑跨域

      //这里不是访问本机,是访问我们的代理服务器,代理服务器和我们本机端口号一样
      //public里面有的东西都算是代理服务器有的,所以你要是在public里面写个students,就会导致你道理服务器去拿你public里面的students,不会去拿你要的服务器里的students数据
      axios.get('http://localhost:8080/maki/students').then(
        response=>{
          console.log('请求成功了',response.data);
        },
        error=>{
          console.log('请求失败了',error.message);
        }
      )
    },
    getCar(){
      axios.get('http://localhost:8080/demo/cars').then(
        response=>{
          console.log('请求成功了',response.data);
        },
        error=>{
          console.log('请求失败了',error.message);
        }
      )
    }
  }
};
</script>
