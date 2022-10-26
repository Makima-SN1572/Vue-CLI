/* 改文件是整个项目的入口文件 */
//引入vue
/* 当我们注释掉render函数后,import Vue from 'vue'这里引入的是一个残缺版的vue,没有模板解析器,真正的完整的vue 在vue/dist/vue.js下*/

/* vue.js是完整版的vue包含核心+模板解析器
  vue.runtime.xxx.js是运行版vue只包含和谐,没有模板解析器
*/

/* 因为vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项,需要使用render函数接收到的createElement去指定具体内容 */

/* import Vue from 'vue/dist/vue' */

/* 当我们要用残缺版的vue时,就需要使用render函数了 */
import Vue from 'vue'
//引入App组件,他是所有组件的父组件
import App from './App.vue'
//关闭bue生产提示
Vue.config.productionTip = false


//测试语法检查
let person = {name:'makima',age:18}


//创建vue实例对象--vm
new Vue({
  el:'#app',
  //下面这行代码一会解释,这行代码的功能:将App组件放入容器中
  render: h => h(App),
  //解释render代码
  /* render(createElement){
    //createElement创建元素
    //console.log('render',typeof createElement);
    //'h1'指的是创建html里面的h1元素,'你好makima'指的是h1里面的内容,所以我们传了两个元素,如果我们用的是组件,就只需要写组件App就行
    return createElement('h1','你好makima')
  } */


  //render: q => q('h1','你好makima')


  //template:`<h1>你好makima</h1>`//次行代码需与完整版vue引入配合
})/* .$mount('#app') *///就是el:'#app',
