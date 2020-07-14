(function test () {
  console.log(9)
})()

console.log(3)
process.nextTick(() => {
  console.log(4)
})
setImmediate(function A () {
  console.log(1)
  setImmediate(function B () {
    process.nextTick(() => {
      console.log(5)
    })
    console.log(2)
  })
})
Promise.resolve(8).then(res => console.log(res))
const p = new Promise((resolve, reject) => {
  console.log(7)
  resolve(6)
})

p.then(res => console.log(res))

setTimeout(function timeout () {
  console.log('TIMEOUT FIRED')
}, 0)

// miscrotask: 7 8 6 1 4        2 5
// mascrotask: 9 3 TIMEOUT FIRED
// 9 3 7 8 6 1 4 TIMEOUT FIRED 2 5
