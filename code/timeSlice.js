function TimeSlice() { }

TimeSlice.prototype = {
  init: function ({ sliceList, callback }) {
    this.gen = this.sliceQueue({
      sliceList,
      callback
    })
    // 切片
    this.next()
  },

  next: function () {
    const { gen } = this
    const start = performance.now()
    let res = null
    do {
      res = gen.next()
      console.log(performance.now());
    }


    while (!res.done && performance.now() - start < 16.7);

    if (res.done) return


    requestAnimationFrame(this.next.bind(this))
  },

  sliceQueue: function* ({ sliceList, callback }) {
    console.log(111);

    for (let i = 0; i < sliceList; i++) {
      const start = performance.now()

      callback(i)
      while (performance.now() - start < 16.7) {
        yield
      }

    }
  }

}

const x = new TimeSlice()

const tree = [
  {
    name: '111'
  },
  {
    name: '222'
  },
  {
    name: '333'
  }
]

x.init({
  sliceList: tree.length,
  callback: i => {
    let item = document.createElement('li')
    item.innerText = `我是${tree[i]['name']}`
    document.getElementById('list').appendChild(item)
  }
})
