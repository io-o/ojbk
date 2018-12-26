
## 首先我们要明白两点!!!
1.  JavaScript是单线程的语言

1. Event Loop是javascript的执行机制
***

 ### Pretend b用的专业名词
 > synchronous：同步任务
asynchronous：异步任务
macro-task：宏任务
micro-task：微任务

***
### 单线程
 > 既然js是单线程，那就像只有一个窗口的银行，客户需要排队一个一个办理业务，同理js任务也要一个一个顺序执行。如果一个任务耗时过长，那么后一个任务也必须等着。那么问题来了，比方说我们要从后端获取一些数据，难道要一直循环代码去判断是否拿到了返回结果么？就像去饭店点餐，肯定不能说点完了以后就去后厨催着人炒菜的，会被揍的。没有女朋友的秃头程序猿机智的发明出 ~~同步任务和异步任务~~ 
![掘金大佬的配图](https://user-gold-cdn.xitu.io/2017/11/21/15fdd88994142347?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

***
 #### 同步任务和异步任务再细分，分为宏任务和微任务
- macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
- micro-task(微任务)：Promise.then()，process.nextTick
 > 宏任务和微任务的区别？
这个就像去银行办业务一样，先要取号进行排号。
一般上边都会印着类似：“您的号码为XX，前边还有XX人。”之类的字样。
因为柜员同时职能处理一个来办理业务的客户，这时每一个来办理业务的人就可以认为是银行柜员的一个宏任务来存在的，当柜员处理完当前客户的问题以后，选择接待下一位，广播报号，也就是下一个宏任务的开始。
 ```
所以多个宏任务合在一起就可以认为说有一个任务队列在这，里边是当前银行中所有排号的客户。
任务队列中的都是已经完成的异步操作，而不是说注册一个异步任务就会被放在这个任务队列中，
就像在银行中排号，如果叫到你的时候你不在，那么你当前的号牌就作废了，柜员会选择直接跳
过进行下一个客户的业务处理，等你回来以后还需要重新取号
而且一个宏任务在执行的过程中，是可以添加一些微任务的，就像在柜台办理业务，
你前边的一位老大爷可能在存款，在存款这个业务办理完以后，柜员会问老大爷
还有没有其他需要办理的业务，这时老大爷想了一下：“最近P2P爆雷有点儿多，
是不是要选择稳一些的理财呢”，然后告诉柜员说，要办一些理财的业务，这时候
柜员肯定不能告诉老大爷说：“您再上后边取个号去，重新排队”。
```
所以本来快轮到你来办理业务，会因为老大爷临时添加的“理财业务”而往后推。
也许老大爷在办完理财以后还想 再办一个信用卡？或者 再买点儿纪念币？
无论是什么需求，只要是柜员能够帮她办理的，都会在处理你的业务之前来做这些事情，这些都可以认为是微任务。
这就说明：你大爷永远是你大爷
在当前的微任务没有执行完成时，是不会执行下一个宏任务的。

![Logo](https://user-gold-cdn.xitu.io/2017/11/21/15fdcea13361a1ec?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
***
 >  实践才是检验真理的唯一方法

```
setTimeout(function() {
    console.log('setTimeout');
})

new Promise(function(resolve) {
    console.log('promise');
}).then(function() {
    console.log('then');
})

console.log('console');
```

```
setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
  Promise.resolve().then(_ => {
    console.log('before timeout')
  }).then(_ => {
    Promise.resolve().then(_ => {
      console.log('also before timeout')
    })
  })
})

console.log(2)

```


```
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
```
***
 > 答案在个人网站里


































