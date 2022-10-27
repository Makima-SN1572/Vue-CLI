<template>
  <div>
    <ul>
      <!-- 跳转路由并携带params参数,to的字符串写法 在你的路径后面跟你要的参数用/来区分,同时需要在路由里去配置路径后面的参数-->
      <!-- <li v-for="m in messageList" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp;
      </li> -->

      <!-- 跳转路由并携带params参数,to的对象写法 -->
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            //params只能写路由name,不可以写名字
            name: 'xiangqing', //你要传路由名字,上方字符串写法不可用路由名字这种写法,只能写路径
            //params参数
            params: {
              //你要拿的数据
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
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
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>
