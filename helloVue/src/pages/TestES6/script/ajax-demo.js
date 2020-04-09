/**
 * 模拟ajax
 */

// GET
// let xhr = new XMLHttpRequest()

// xhr.open('GET', './data.json', true)
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText)
//     }
//   }
// }
// xhr.send(null)

// POST
// let xhr = new XMLHttpRequest()

// xhr.open('POST', './static/data.json', true)
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText)
//     }
//   }
// }
// const request = {
//   a: 1,
//   b: 2
// }
// xhr.send(request)

// Promise

function ajax (url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else if (xhr.status === 404) {
          reject(new Error('404 not found'))
        }
      }
    }
    xhr.send(null)
  })
}
