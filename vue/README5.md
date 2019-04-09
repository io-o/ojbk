## Vue 使用jsx

> 个人感觉Vue越来越像React，Vue也有了jsx, 包括Hooks 尤雨溪说之后也可能会用🤣🤣🤣（Vue 推荐在绝大多数情况下使用template来创建你的HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，就需要使用render函数，它比 template 更接近编译器。但是复杂的render函数书写异常痛苦，好在官方提供了一个Babel 插件，可以将更接近于模板语法的JSX转译成JavaScript）


```
// item.vue 传统写法 item组件中就是接收父组件传过来的id值来显示不同的h标签
<template>
 <div>
   <h1 v-if="id===1">
     <slot></slot>
   </h1>
   <h2 v-if="id===2">
     <slot></slot>
   </h2>
   <h3 v-if="id===3">
     <slot></slot>
   </h3>
   <h4 v-if="id===4">
     <slot></slot>
   </h4>
 </div>
</template>

<script>
   export default {
       name: "item",
       props:{
         id:{
           type:Number,
           default:1
         }
       }
   }
</script>

```

```
// item.vue 使用render函数 和 jsx 是不是清爽了很多
<script>
   export default {
       name: "item",
       props:{
         id:{
           type:Number,
           default:1
         }
       },
     render() {
       const hText=`<h${this.id}>${this.$slots.default[0].text}</h${this.id}>`
       return <div domPropsInnerHTML={hText}></div>
     }
   }
</script>
```