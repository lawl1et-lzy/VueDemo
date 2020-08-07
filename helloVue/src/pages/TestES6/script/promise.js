const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor (executor) {
    // 初始化 state 为等待态
    this.state = PENDING
    // 成功的值
    this.value = undefined
    // 失败的原因
    this.reason = undefined
    // 存放成功的回调
    this.onResolvedCallbacks = []
    // 存放失败的回调
    this.onRejectedCallbacks = []
    // 执行函数体
    let resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者
      executor(resolve, reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }
  // then
  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => {}
    onRejected = typeof onRejected === 'function' ? onRejected : (v) => {}

    switch (this.state) {
      case PENDING:
        // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
        this.onResolvedCallbacks.push(() => {
          onFulfilled(this.value)
        })

        // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
        this.onRejectedCallbacks.push(() => {
          onRejected(this.reason)
        })
        break
      case REJECTED:
        onRejected(this.reason)
        break
      case FULFILLED:
        onFulfilled(this.value)
        break
    }
  }
}

let p1 = new MyPromise((resolve, reject) => {
  resolve(1)
})

window.p1 = p1

// then 方法传入两个方法作为参数，一个是fn1方法，一个是 fn2 方法
p1.then(data => {
  setTimeout(() => {
    console.log('data', data)
  }, 2000)
  // fn1 方法的参数，用于获取promise对象的值
}, (err) => {
  console.log('err', err)
  // fn1 方法的参数，用于获取失败的原因
})
