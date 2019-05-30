> ES5 实现数组 map 方法
***
```
function selfMap(fn, context) {
  let arr = Array.prototype.slice.call(this)
  let mappedArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    mappedArr.push(fn.call(context, arr[i], i, this))
  }
  return mappedArr
}
```

> ES5 实现数组 filter  方法
***
```
function selfFilter(fn, context) {
  let arr = Array.prototype.slice.call(this)
  let filterdArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    fn.call(context, arr[i], i, this) && filterdArr.push(arr[i])
  }
  return filterdArr
}
```

> ES5 实现数组 reduce  方法
***
```
function selfReduce(fn, initValue) {
  let arr = Array.prototype.slice.call(this)
  if (initValue) arr.unshift(initValue)
  let res = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i + 1)) continue
    res = fn.call(null, res, arr[i + 1], i ,arr)
  }
  return res
}
```