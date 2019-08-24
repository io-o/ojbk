function Mvvm(options = {}) {
  this.$options = options
  this._data = this.$options.data
  observe(this._data)
  for (let key in this._data) {
    Object.defineProperty(this, key, {
      enumerable: true,
      get() {
        return this._data[key]
      },
      set(newValue) {
        this._data[key] = newValue
      }
    })
  }
  new Compile(options.el, this)
}

// 模板处理
function Compile(el, vm) {
  vm.$el = document.querySelector(el)
  let fragment = document.createDocumentFragment()
  while(child = vm.$el.firstChild) {
    fragment.appendChild(child)
  }
  replace(fragment)
  function replace(fragment) {
    Array.from(fragment.childNodes).forEach(note => {
      let text = note.textContent
      let reg = /\{\{(.*)\}\}/
      if (note.nodeType === 3 && reg.test(text)) {
        //console.log(RegExp.$1); // RegExp.$1 取出{{}}的值
        let arr = RegExp.$1.split('.')
        let val = vm
        arr.forEach(item => {
          val = val[item]
        })
        note.textContent = text.replace(reg, val)
        
      }
      if (note.childNodes) {
        replace(note)
      }
      
    })
  }
  vm.$el.appendChild(fragment)

}

function Observe(data) {
  for (const key in data) {
      observe(key)
      let val = data[key]
      Object.defineProperty(data, key, {
        enumerable: true,
        get() {
          return val
        },
        set(newVal) {
          if (newVal === val) {
            return
          }
          val = newVal
          observe(newVal)
        }
      })
    
  }
}

function observe(data) {
  if (typeof data !== 'object') {
    return
  }
  return new Observe(data)
}
