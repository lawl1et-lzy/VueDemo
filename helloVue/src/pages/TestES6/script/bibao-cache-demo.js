// 闭包隐藏数据，只提供 API
function cache () {
  let data = {}
  return {
    set: (key, val) => {
      data[key] = val
    },
    get: (key) => {
      return data[key]
    }
  }
}
const c = cache()
c.set('a', 133)
console.log(c.get('a'))
