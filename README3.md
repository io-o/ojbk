
# 吃透JavaScript的值传递和引用传递以及牵扯出深浅拷贝
 > 开始之前，先了解下数据类型，分为：原始类型（也叫基本数据类型） 和引用类型

- 原始类型（undefined、Null、Boolean、Number、String）
- 引用类型 （Array、Function、Object）
***

 ### 那么问题来了，原始类型和引用类型的区别是什么？
> 基本类型在赋值的时候是通过值传递的方式，变量赋值到另外的变量，实际上是将对应的值拷贝了一份，然后赋值给新的变量。我们把它称作值传递
引用类型在赋值的时候是通过引用传递的方式，变量赋值到另外的引用类型数据，那么它只记录了一个内存地址，该地址存放了具体的数据。注意之前提到指向基本数据类型的变量相当于包含了数据，而现在指向非基本数据类型的变量本身是不包含数据的。
***

```
// 值类型
let a = 1
let b = a
a = 5
console.log(b) // 1
```
> 完全独立的拷贝，互不干涉, 我们将a的值改变，b不会受到影响。

```
// 引用类型
function change(person) {
    person.age = 25
    return person
}
let alex = {
    age: 30
};
let changedAlex = change(alex)
console.log(alex) // {  age: 25 }
console.log(changedAlex) // {  age: 25 }
```

> 对象是通过引用传递，而不是值传递。也就是说，变量赋值只会将地址传递过去，alex和changedAlex指向同一个数组。 如果我们更新alex，changedAlex也会受到影响。

| 变量 | 地址 | 对象  |
| ---  | ---  | ---   |
| alex | #001|  age: 30 |
| changedAlex | #001| |
***


### 引用重新赋值
>如果我们将一个已经赋值的对象重新赋值，那么它将包含新的数据或则引用地址。

```
var obj = { a: '111' }
obj = { b: '222' }
console.log(obj) // { b: '222' }
```
> obj从指向第一个对象变为指向第二个对象

| 变量 | 地址 | 对象  |
| ---  | ---  | ---   |
| obj | #001|  a: '111' |
| | #002| b: '222'|

> 如果一个对象没有被任何变量指向，就如第一个对象(地址为#001)，JavaScript引擎的垃圾回收机制会将该对象销毁并释放内存。
***

### 上文的引用类型代码，alex和changedAlex指向同一个数组。 那么怎么才不让他改变？ 这就用到了深拷贝

```
function change(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}
var alex = {
    name: 'Alex',
    age: 30
};
var alexChanged = change(alex);
console.log(alex); // { name: 'Alex', age: 30 }
console.log(alexChanged); // { name: 'Alex', age: 25 }
```

***
 > 实践出真知
 
```
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };  
    return person;
}
var personObj1 = {
    name: 'Alex',
    age: 30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // -> 输出?
console.log(personObj2); // -> 输出?
```

> 答案在个人网站











