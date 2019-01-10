## vue 插槽slot

> Vue 实现了一套内容分发的 API，这套 API 基于当前的 Web Components 规范草案，将 <slot> 元素作为承载分发内容的出口。 简单理解为一个占位符，可以指定默认值，使用时替换掉。

> [官网文档](https://cn.vuejs.org/v2/guide/components-slots.html) 

```
// 子组件 使用slot占位 
<template>
   <div class="slot-tpl">
      <slot></slot>
   </div>
</template>

```

```
// 父组件调用

<template>
  <div class="home">
    <slotTpl>
      yo yo yo
    </slotTpl>
  </div>
</template>

```

> slot还可以指定调用, 使用name来指定

```
// 子组件
<template>
  <div class="slot-tpl">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="footer">
      <slot name="footer">
       默认值 父组件不调用， 默认显示
      </slot>
    </div>
  </div>
</template>

```

```
// 父组件

<template>
  <div class="home">
    <slotTpl>
      <div slot="header">
       header-slot
      </div>
    </slotTpl>
  </div>
</template>

```