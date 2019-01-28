# 吃透JavaScript之节流
> 节流的原理很简单：

如果你持续触发事件，每隔一段时间，只执行一次事件。

根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。
***

### 先写个使用时间戳

```
// 使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。

function throttle(func, wait) {
  let pre = 0
  return function(...args) {
    let now = +new Date()
    if (now - pre > wait) {
      func.apply(this, args)
      pre = now
    }
  }
}


```

### 定时器

```
// 当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。

function throttle(func, wait) {
  let timer
  let pre = 0
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        func.apply(this, args)
      }, wait)
    }
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
