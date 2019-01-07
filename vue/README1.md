## vue 自定义指令

> 全局注册自定义指令
> [官网文档](https://cn.vuejs.org/v2/guide/custom-directive.html) 

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

> 修饰符以及传参

> arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
> modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。

```
<button class="search-btn" v-can:hhh.bottom.top="false" @click="doSearch">搜索一下</button>
```

```
Vue.directive('can', (el, binding) => {
  // 获取修饰符
  console.log(binding.modifiers)  // {bottom: true; top: true}
  // 获取参数
  console.log(binding.arg) // hhh
  if (!binding.value) {
    el.style.display = 'none'
  }
})


```


