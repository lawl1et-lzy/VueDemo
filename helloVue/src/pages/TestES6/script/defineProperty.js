function observable (obj) {
  if (!obj || typeof obj !== 'object') return

  let keys = Object.keys(obj)
  keys.forEach((key) => {
    if (typeof obj[key] !== 'object') {
      defineReactive(obj, key, obj[key])
    } else {
      observable(obj[key])
    }
  })
}

function defineReactive (obj, key, val) {
  Object.defineProperty(obj, key, {
    get () {
      console.log(`${key}-${val}属性被读取了...`)
      return val
    },
    set (val) {
      console.log(`${key}-${val}属性被设置了...`)
      this.val = val
    }
  })
}

export default observable
