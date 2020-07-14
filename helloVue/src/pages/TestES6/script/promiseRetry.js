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
const promiseRetry = (fn, times) => {
  return new Promise((resolve, reject) => {
    let error
    const retry = (fn, times) => {
      if (times) {
        console.log('times', times)
        fn().then(res => {
          resolve(res)
        }).catch(err => {
          error = err
          retry(fn, --times)
        })
      } else {
        reject(error)
      }
    }
    retry(fn, times)
  })
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
const fn = () => {
  return new Promise((resolve, reject) => {
    Math.random() < 0.33 ? resolve(1) : reject(2)
  })
}
promiseRetry(fn, 3).then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
})
