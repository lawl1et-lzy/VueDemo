/* eslint-disable */
// 模拟 bind
Function.prototype.bind1 = function (context, ...args) {
  if(typeof this === 'function') {
    return (...rest) => {
      return this.call(context, ...args, ...rest)
    }
  } else {
    throw new TypeError('must be a function')
  }
}

const obj = { a: 1 }
window.d = 100
function fn (a, b, c) {
  console.log(this.a)
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d) // 自由变量在函数定义的时候就已经确认了
}
const fn1 = fn.bind1(obj, 10, 20, 30)
fn1()
// 1
// 10
// 20
// 30
// 100
