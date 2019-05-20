// import { isObject } from 'util'

// import { orderVoucherItems } from 'static/mock.js'

let obj = [{
  name: {
    firstName: 'l',
    lastName: 'awliet'
  },
  age: 25
}]

// 1. 遍历
// for (let item in obj) {
//   newObj[item] = obj[item]
// }

// 2. Object.assign()
// let newObj = Object.assign({}, obj)

// 3. 扩展运算符
// let newObj = {...obj}

let deepCopy = function (src) {
  var ret = {}
  for (var k in src) {
    ret[k] = typeof src[k] === 'object' ? deepCopy(src[k]) : src[k]
  }
  return ret
}

let newObj = deepCopy(obj)

newObj[0].name.lastName = 'niya'

console.log('obj', obj) // {name: "lawliet", age: 25}
console.log('newObj', newObj) // {name: "niya", age: 25}
