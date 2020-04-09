// 正常bind调用
// const obj = {a: 1}
// window.a = 100
// function fn (a, b, c) {
//   console.log(this.a)
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// const fn1 = fn.bind(obj, 10, 20, 30)
// fn1()

// 模拟 bind
// Function.prototype.bind1 = function () {
//   const arr = Array.prototype.slice.call(arguments)
//   const t = arr.shift()
//   const self = this
//   return function () {
//     return self.call(t, arr)
//   }
// }
