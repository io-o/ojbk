> 类型判断 
***

##### typeof
> 最常用的判断类型方法 ， 判断值类型可以， 引用类型无法准确判断。
```
console.log(111) // number

console.log('aaa') // string

console.log(Null) // object

console.log({}) // object

console.log([]) // object

functiuon a() {}

console.log(a) // function
```

> 解决方法 使用 Object.prototype.toString() 来判断

```
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]

```