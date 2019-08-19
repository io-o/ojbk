# 吃透JavaScript-数组去重

***

### 最简单的当然是ES6 的 set方法

```
let arr = [1, 2, 3, 1]

console.log(new Set(arr))

```

### 使用indexOf来判断

```
// indexOf 没有值返回 -1

function unique (arr) {
  let res = []
  for (const i of arr) {
    if (res.indexOf(i) === -1) {
      res.push(i)
    }
  }
  return res
}


```

### 使用filter

```

function unique (arr) {
  let res = arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
  return res
}


```


### 使用键值对来判断

```
// 这个很吊，刚开始都没看懂。。。

function unique (arr) {
  let obj = {}
  return arr.filter((item, index, array) => {
    let typeNum = typeof item  +  JSON.stringify(value)
    return obj.hasOwnProperty(typeNum) ? false : (obj[typeNum] = true)
  })
}


```


