// let set = new Set('safsdfasdfsadfasdfdddddaaaasssss')

// // let arr = ['']

// // arr.forEach(item => set.add(item))
// console.log(set)
/* eslint-disable */
console.log(7);
(function test () {
  setTimeout(function () { console.log(4) }, 0)
  new Promise(function executor (resolve) {
    console.log(1)
      for (var i = 0; i < 10000; i++) {
      i == 9999 && resolve()
      }
      Promise.resolve(6).then(e => console.log(e))
    console.log(2)
  }).then(function () {
    console.log(5)
  })
  console.log(3)
})();
console.log(8)
