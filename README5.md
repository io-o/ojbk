# 吃透JavaScript之防抖
> 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，
***

### 先写个基础版

```
// func是要防抖的函数
// wait是延迟时间
function debounce(func, wait) {
  let timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}

```

### 升级版0.1

```
// 获取正确this指向
// 执行上文代码 debounce函数会改变this指向， 指向window, 使用apply拷贝this指向
function debounce(func, wait) {
  let timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this)
    }, wait)
  }
}

```

### 升级版0.2

```
// 获取正确 event 对象
// debounce函数执行后，在func函数内打印event对象，undefined, 使用apply传递arguments
// ...args ES6扩展运算符
function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

```

### 升级版0.3

```
// 不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行
// 加个判断解决
function debounce(func, wait, immediate) {
  let timeout
  return function (...args) {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 已经执行过，不再执行
      let cann = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wiat)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function(){
        func.apply(context, args)
      }, wait)
    }
  }
}

```
