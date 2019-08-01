/* eslint-disable */
// unshift
// Array.prototype.insertFirstPosition = function (value) {
//   for (let i = this.length; i >= 0; i--) {
//     this[i] = this[i - 1]
//   }
//   this[0] = value
// }
// let arr = [1, 2, 3, 4, 5]
// arr.insertFirstPosition(6)
// arr.unshift(-1,-2)
// console.log(arr)

let arr2 = [1,0,0,2,3]
let arr3 = [1,0,0,2,3]
let zeroSum = [];
// 方法一
let rel = arr2.filter((item, index) => {
  if(item) {
    return item
  } else {
    zeroSum.push(item)
  }
})
rel.push(...zeroSum)

// 方法二

console.log(arr2)
console.log(rel)
console.log(zeroSum)
// console.log(arr2.sort((a, b) => b - a))