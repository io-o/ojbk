## Vue Keep-alive

> 组件缓存，一般用于table列表页面点击详情查看，跳转回来，数据缓存（比如： 分页查询，模糊匹配）


```
// App.vue 在路由外边包裹一层
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

```

```
// router.js, 通过设置meta里 keepAlive来确定页面是否缓存

  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      keepAlive: true
    }
  }

```

```
// About.vue 需要缓存的页面，设置beforeRouteLeave路由离开时，缓存数据， activated keep-alive 组件激活时调用，赋值。
export default {
  data() {
    return {
      activeName: 'business',
      tableQuery: {
        filter: '',
        paeNum: 1
      },
      total: null,
      tableData: []
    }
  },

  created() {
    this.tableData = [{}]
    this.total = 22
  },

  beforeRouteLeave(to, form, next) {
    this.tableQuery = this.tableQuery
    next()
  },

  activated() {
    this.tableQuery = this.tableQuery
  },

  methods: {
    ccc() {
      this.$router.push({ path: '/table' })
    },
   
  }
}

```
