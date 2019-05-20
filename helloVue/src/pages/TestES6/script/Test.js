// function fn ({x = 1, y = 2} = {}) {
//   return `x=${x},y=${y}`
// }

// console.log(fn())
// console.log(fn({x: 2, y: 3}))
// console.log(fn({ x: 3 }))

function fn (...param) {
  return [param]
}

console.log(fn(1, 2, 3, 4))
