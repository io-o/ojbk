> 字符串 在 JavaScript 中，文本数据被作为字符串存储，字符没有单独的类型。
字符串的内部格式总是 UTF-16，它不会绑定到页面编码中。
***
* 特殊字符
>通过使用换行符 \n 来创建带有单引号的多行字符串，它表示中断
```
let guestList = "Guests:\n * John\n * Pete\n * Mary"

alert(guestList); // a multiline list of guests
```
| 字符 | 描述 |
| ------ | ------ |
| \n | 	New line |
| \b | Backspace |
| \f | Form feed |
| \t | Tab |

* 字符串不可变
> 在 JavaScript 中，字符串不可更改。改变字符是不可能的。

```
// 字符串是有长度的
let str = 'Hi'

str[0] = 'h' // error
alert( str[0] ) // 无法运行

```

* 字符串改变大小写

```
alert( 'Interface'.toUpperCase() ) // INTERFACE
alert( 'Interface'.toLowerCase() ) // interface

```

* 字符串查找

> str.indexOf(substr, pop)  它从给定位置 pos 开始，在 str 中查找 substr，如果没有找到，则返回 -1，否则返回匹配成功的位置
```
let str = 'Widget with id'

alert( str.indexOf('id', 2) ) // 12

```
***
>  str.includes(substr, pos) 取决于 str 是否包含 substr 来返回 true/false

```
alert( "Midget".includes("id") ) // true
alert( "Midget".includes("id", 3) ) // false, 位置 3 没有 "id"

```

* 字符串获取
> JavaScript 中有三种获取字符串的方法：substring、substr 和 slice
***
> str.slice(start [, end]) 返回从 start 到（但不包括）end 的字符串部分

```
let str = "stringify"
alert( str.slice(0, 5) ) // 'strin', 从 0 到 5 的子字符串（不包括 5）
alert( str.slice(0, 1) ) // 's', 从 0 到 1，但不包括 1，所以只有在 0 的字符

```
***
> str.substring(start [, end]) 返回 start 和 end 之间的字符串部分。这与 slice 几乎相同，但它允许 start大于 end。

```
let str = "stringify";

// 这些对于子串是相同的
alert( str.substring(2, 6) ) // "ring"
alert( str.substring(6, 2) ) // "ring"

// ...但除了 slice：
alert( str.slice(2, 6) ) // "ring" (the same)
alert( str.slice(6, 2) ) // "" (an empty string)

```
***
> str.substr(start [, length]) 从 start 开始返回给定 length 的字符串部分。与以前的方法相比，这个允许我们指定 length 而不是结束位置

```
let str = "stringify"
alert( str.substr(2, 4) ) // 环，从第二位获得 4 个字符
let str = "stringify"
alert( str.substr(-4, 2) ) // gi，从第 4 位获得 2 个字符

```