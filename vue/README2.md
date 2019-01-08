## vue 混合mixins

> mixins是Vue组件分发可重用功能的一种灵活方法。mixins对象可以包含组件的任何选项。当组件使用mixins时，mixins中的所有选项将混入组件自己的选项。 `组件会合并mixins的数据方法， 都存在时，组件的方法火数据会覆盖掉mixins的方法数据!!!`

> [官网文档](https://cn.vuejs.org/v2/api/#Vue-mixin) 

```
// 在src下新建mixins文件夹, 新建 index.js

export const mixins = {
  data() {
    return {
      a: '我是mixins'
    }
  },
  methods: {
    show() {
      console.log('hello, mixins')
    }
  }
}

```

> 在组件内引入mixins, 直接调用数据 方法 
```
<template>
   <div>
      <h1>{{a}}</h1>
      <button @click="show">mixins</button>
   </div>
</template>

<script>
import { mixins } from '@/mixins/mixins.js'
export default {
  mixins: [mixins]
}
</script>
