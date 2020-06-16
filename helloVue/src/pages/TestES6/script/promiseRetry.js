/* eslint-disable */
/**
 * 通过状态机
 */
function createGenerator (fn, times) {
  return function (...arg) {
    return function *() {
      // yield new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     reject(1111)
      //   }, 2000)
      // })
      // yield new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     reject(2222)
      //   }, 1000)
      // })
      // yield fn(...arg)
      for (let i = 0; i < times; i++) {
        yield fn(...arg)
      }
    }
  }
}
function promiseRetry (fn, times) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      let task = createGenerator(fn, times)(...args)() // 启动任务
      let result = task.next()
      function step () {
        if (!result.done) {
          result.value.then(res => {
            resolve(res)
          }).catch(error => {
            console.log('step ', error)
            result = task.next()
            step()
          })
        } else {
          reject(`已经重试${times}次`)
        }
      }
      step()
    })
  }
}

/**
 * Promise
 */
function promiseRetry(fn, times) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const retry = (fn, times) => {
        let error
        if(times) {
          const p = fn.call(this, ...args)
          p.then(res => resolve(res)).catch(err => {
            error = err
            retry(fn, times--)
          })
        } else {
          reject(error)
        }
      }
      retry(fn, times)
    })
  }
}

/**
 * await
 */
function promiseRetry(fn, times) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      let error
      try {
        const retry = async (fn, times) => {
          if (times) {
            const res = await fn.apply(this, args)
            resolve(res)
          } else {
            reject(error)
          }
        }
        retry(fn, times)
      } catch (error) {
        error = error
        retry(fn, times--)
      }
    })
  }
}

// 示例
function fn(...args) {
  return new Promise((resolve, reject) => {
    resolve(1)
    console.log('fn args', args)
  })
}
promiseRetry(fn, 3)(1,2,3).then(res => {
  console.log('promiseRetry res', res)
}).catch(error => {
  console.log('promiseRetry error', error)
})
