<template>
  <div>
    <ul>
      <!-- 跳转路由并携带query参数,to的字符串写法 ?__=__$__=__写法-->
      <!-- :to="`/home/message/detail?id=${m.id}&title=${m.title}`"   加:是当成js去解析,但是你不能在js代码里写路径,所以要用``包起来当模板字符串,然后用${}里面的js变量去拿到你要的数据 -->
      <!-- <li v-for="m in messageList" :key="m.id"><router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;</li> -->

      <!-- 跳转路由并携带query参数,to的对象写法 -->
      <li v-for="m in messageList" :key="m.id">
        <router-link :to="{
            path:'/home/message/detail',//你要传的路径
            //query参数
            query:{
                //你要拿的数据
               id:m.id,
               title:m.title 
            }
        }">
        {{m.title}}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      messageList: [
        { id: '001', title: "消息001" },
        { id: '002', title: "消息002" },
        { id: '003', title: "消息003" },
      ],
    };
  },
};
</script>
