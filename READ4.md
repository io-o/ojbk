# 吃透JavaScript作用域与闭包
> 在《你不知道的JavaScript》中甚至这样写道“对于那些有一点 JavaScript 使用经验但从未真正理解闭包概念的人来说， **理解闭包可以看作是某种意义上的重生** ”。
对于真正的理解闭包有一个非常重要的前置知识，那就是作用域与词法作用域，如果你没能好好理解词法作用域，那么闭包是肯定理解不了的！那么接下来就好好的理解作用域吧。
***

### 什么是作用域？
> “作用域就是一套规则，用于确定在何处以及如何查找变量（标识符）的规则”。在这句话中读到一个关键点 **查找变量（标识符）**，那么就从查找变量说起吧。

```
function foo() {
  var a = 'ojbk'
  console.log(a); // 输出"ojbk"
}
foo()

```
```
var a = 'ojbk'
function foo() {
  console.log(a); // 输出"ojbk"
}
foo()

```

> 以上两段代码都有查找变量，第一段代码是在函数中找到a变量，第二段代码是在全局中找到b变量，这就引出了**函数作用域**和**全局作用域**
代码2先在函数作用域中查找，没有找到，再去全局作用域中查找，有一个往外层查找的过程。我们好像是顺着一条链条从下往上查找变量，这条链条，我们就称之为**作用域链**。

***
### 作用域中变量（标识符）的查找规则
```
console.log(ojbs); // 输出undefined
var ojbs= 'ojbk'; 

```
```
console.log(ojbh); // 报错

```
> avaScript是有编译过程的，不要惊讶，真的有！也就是说var ojbs= 'ojbk'; 这段代码，其实这是有两个动作的：
1. 编译器在当前作用域中声明一个变量ojbs
1.  运行时引擎在作用域中查找该变量，找到了ojbs变量并为其赋值

### 什么是闭包？
> **闭包就是能够读取其他函数内部变量的函数**

```
function f1() {
      var n = 1
      function f2() {
        console.log(n)
      }
      return f2
    }
    var f2= f1()
    f2()  // 1
```
> 上面代码， f2可以读取f1函数内部变量n， f2就是闭包

> 闭包有什么用？

```
for (var i = 1; i <= 10; i++) {
	setTimeout(function () {
		console.log(i)
	}, 1000)
}
```
> 上面代码输出 10次 11
i是声明在全局作用中的，定时器中的匿名函数也是执行在全局作用域中,
如果想要输出1 - 10 怎么办？ 
让i在每次迭代的时候，都产生一个私有的作用域，在这个私有的作用域中保存当前i的值。

```
for (var i = 1; i <= 10; i++) {
	(function (j) {
		setTimeout(function () {
			console.log(j)
		}, 1000)
	})(i)
}
```
```
// ES6的let声明，只在块级作用域生效
for (let i = 1; i <= 10; i++) {
	setTimeout(function () {
		console.log(i)
	}, 1000)
}
```
***
> 实践出真知

```
function fun(n,o){
  console.log(o);
  return {
    fun: function(m){
      return fun(m,n);
    }
  };
}

var a = fun(0);  // ?
a.fun(1);        // ?        
a.fun(2);        // ?
a.fun(3);        // ?

var b = fun(0).fun(1).fun(2).fun(3);  // ?

var c = fun(0).fun(1);  // ?
c.fun(2);        // ?
c.fun(3);        // ?
```
> 答案在评论里

