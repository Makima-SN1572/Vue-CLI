//定义一个插件
export default {
    install(Vue,x,y,z) {
        console.log(x,y,z);
        //console.log('这里的参数是vue函数,是vm他爹',Vue);
        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        /* 全局配置,这里就可以直接在全局 */
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
                
            }, //调用时间:指令与元素成功绑定时(一开始就调用)
            inserted(element, binding) {
                
                element.focus()
            }, //调用时间:指令所在元素被插入页面时
            update(element, binding) {
            
                element.value = binding.value
            }
        }) //此时v-fbind自定义指令全局可用

        //定义混入mixin
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
              }
        })
        //给Vue原型上添加一个方法(vm,vc都能用)
        Vue.prototype.hello = ()=>{alert('hello')}
    }
}

/* const obj = {
    install(){
        console.log('install');
    }
}
export default obj */