## vue bus总线传递

> Bus，可以作为一个简单的组件传递数据，用于解决跨级和兄弟组件通信问题。


```
// 创建 bus 其实就是重新创建个vue实例

import Vue from 'vue'

const Bus = new Vue()
export default Bus

```

```
// main.js里调用 挂载到原型上

import Bus from './bus'

Vue.prototype.$bus = Bus

```

> 兄弟组件 A

```
<template>
  <div class="router">
    <h1>router</h1>
    <button @click="handelClick">
      按我
    </button>
  </div>
</template>

<script type="text/javascript">
export default {
  methods: {
    handelClick () {
      // 点击触发bus实例事件，传参
      this.$bus.$emit('aa', '哈哈哈哈')
    },
  },
}
</script>

```

> 兄弟组件 B 接收参数

```
<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      message: '',
    }
  },

  mounted () {
    // 监听事件 取值
    this.$bus.$on('aa', v => {
      this.message = v
    }) 
  },
}
</script>

```