<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名{{StudentName}}</h2>
    <h2>学生年龄{{MyAge}}</h2>
    <h2>学生性别{{Sex}}</h2>
    <button @click="UpdateAge">点我修改上方收到的年龄</button>
  </div>
</template>

<script>

export default {
    name:'MyStudent',
    data() {
        return {
          msg:'感谢你的关注',
          MyAge:this.Age//这里指定MyAge是props里的属性,this指向vc
        }
    },
    methods:{
      UpdateAge(){
        this.MyAge++//进行修改
      }
    },
    props:['StudentName','Age','Sex']//简单声明接收,注意点:1.别瞎几把写一些自己不用的属性,不用的属性值为undefined  2.不要尝试去直接修改props属性,需要修改的话,就去这里的data函数里去重新定义要修改的props里的age,methods里再去写函数(props里的属性是高于data里的属性)

    //接收的同时对数据进行类型限制
    /* props:{
      //这里我们就直接把每个要传的数据的数据类型定义完毕,这样当我们后面需要进行计算或拼接时就可以按照数据的数据类型属性进行使用,但是因为我们直接声明了数据类型,所以vue遇到number数据类型会直接报错,让我们给他用String类型的数据,所以我们此时为了避免报错,就需要给每个数值类型加:,这样就可以告知后面使用者我们这里的number在未单项绑定之前是number类型
      StudentName:String,
      Age:Number,
      Sex:String
    } */

    //接收的同时对数据进行类型限制,默认值得指定+必要性的限制
    /* props:{
      StudentName:{
        type:String,//StudentName的类型是字符串
        required:true//StudentName必须传,不传就报错
      },
      Age:{
        type:Number,
        default:22//默认值22,当你不传Age数据时,那么他就会自己传个默认值22上去
      },
      Sex:{
        type:String,
        required:true
      }
    } */

}
</script>
