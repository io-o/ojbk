## Vue 实现跳转新窗口 打开图片(水文)

> 在页面添加一个a标签，隐藏起来，设置好target属性为_blank，href设为空,然后点击时,设置href的值


```
<!-- template -->
  <button @click="handleClick">打开新窗口</button>
  <a ref="target" href="" target="_blank"></a>
<!-- template -->

<!-- js -->
  handleClick() {
    const target = this.$refs.target
    target.setAttribute('href', 'http://pic.58pic.com/58pic/15/68/59/71X58PICNjx_1024.jpg')
    target.click()
  }

```
