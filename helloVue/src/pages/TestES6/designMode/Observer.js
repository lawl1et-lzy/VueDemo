let eventEmitter = {
  // 缓存列表
  list: {},
  // 订阅
  on (event, fn) {
    if (!this.list[event]) {
      this.list[event] = []
    }
    this.list[event].push(fn)
  },
  // 订阅一次
  once (event, fn) {
    const on = (...args) => {
      fn.apply(this, args)
      this.off(event, on)
    }
    on.fn = fn
    this.on(event, on)
  },
  // 取消订阅
  off (event, fn) {
    let fns = this.list[event]
    if (!fns) return false
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let [k, v] of Object.entries(fns)) {
        if (v === fn || v.fn === fn) {
          fns.splice(k, 1)
          break
        }
      }
      return this
    }
  },
  // 发布
  emit (...args) {
    // 第一个参数是对应的 event 值，直接用数组的 shift 方法取出
    const event = args.shift()
    let fns = this.list[event]
    // 如果缓存列表里没有 fn 就返回 false
    if (!fns || fns.length === 0) {
      return false
    }
    fns.forEach(fn => {
      fn.apply(this, args)
    })
    return this
  }
}

function user1 (content) {
  console.log('用户1订阅了:', content)
}

function user2 (content) {
  console.log('用户2订阅了:', content)
}

// function user3 (content) {
//   console.log('用户3订阅了:', content)
// }

// function user4 (content) {
//   console.log('用户4订阅了:', content)
// }

eventEmitter.on('article', user1)
eventEmitter.once('article', user2)

eventEmitter.emit('article', {title: 'hahaha1', article: '不错1'})

eventEmitter.emit('article', {title: 'hahaha2', article: '不错2'})
