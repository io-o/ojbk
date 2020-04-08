# 时间切片 TimeSlice
### 背景
> 最近在项目遇到一个复杂表单渲染，表单结构由后端返回，同时渲染800+个组件（input select table upload等等），导致白屏时间超过5S，严重影响用户体验，作为一个有理想的前端，这不能忍，必须优化。

### 优化思路与结果
- 人的眼睛大约每秒可以看到 60 帧，那么就代表我们每 16.7ms 就要看到 1 帧，所以每16.7ms就要渲染一次
- requestAnimationFrame
- generator yield

> 拿到后端返回数据后，进行数据切片，每隔16.7ms渲染一次数据，页面非常流畅丝滑👻👻👻

### 源码介绍
##### 初始化任务
```javascript
init: function({ sliceLen, callback }) {
      this.gen = this.sliceQueue({
        sliceList,
        callback
      })
      // 切片
      this.next()
    }
```
>sliceLen 拿到的后端数据长度，按次去切片
callback : 这里传一个回调函数，用来处理数据渲染DOM

##### 任务队列
```javascript
sliceQueue: function* ({ sliceList, callback }) {
      for (let i = 0; i < sliceList; i++) {
        const start = performance.now()
        callback(i)
        while (performance.now() - start < 16.7) {
          yield
        }
      }
    }
```
> yield 打断执行
我们要记录回调的执行时间，如果执行需要的时间少于 16.7ms，就停止继续执行下去，释放主线程让主线程可以利用这个时间再去做别的事情

##### 执行下一次任务
```javascript
next: function() {
      const { gen } = this
      const start = performance.now()
      let res = null
      do {
        res = gen.next()
        console.log(performance.now());
      }
      while(!res.done && performance.now() - start < 16.7);
      if (res.done) return
      requestAnimationFrame(this.next.bind(this))
    },
```
> 如果要是大于的话，我们就不需要执行下一个切片了，我们就要在下一次绘制（requestAnimFrame）的时候，去执行该任务，这样就可以把每一个任务给切开了

