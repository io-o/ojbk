## vue 自定义指令

> 全局注册自定义指令
> https://cn.vuejs.org/v2/guide/custom-directive.html

```
// 在main.js里全局注册 v-can指令，当页面里传的值为false，隐藏使用指定的DOM元素。

Vue.directive('can', (el, binding) => {
  if (!binding.value) {
    el.style.display = 'none'
  }
})
  
```

> 在页面使用 v-can指令， 传参。 
```
<button class="search-btn" v-can="false" @click="doSearch">搜索一下</button>

```


