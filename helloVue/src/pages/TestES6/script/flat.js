// 递归
const flat1 = (arr) => {
  if (!Array.isArray(arr)) return arr
  const hasArr = arr.some(item => Array.isArray(item))
  if (!hasArr) return arr
  return flat1(Array.prototype.concat.apply([], arr))
}

const flat2 = (arr) => {
  if (!Array.isArray(arr)) return arr
  while (arr.some(item => Array.isArray(item))) {
    arr = Array.prototype.concat.apply([], arr)
  }
  return arr
}

const flat3 = (arr) => {
  if (!Array.isArray(arr)) return arr
  let res = []
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flat3(item))
    } else {
      res.push(item)
    }
  }
  return res
}

const flat4 = (arr) => {
  if (!Array.isArray(arr)) return arr
  let res = []
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flat4(item))
    } else {
      res.push(item)
    }
  }
  return res
}

function flat5 (arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') { return false };

  let res = arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flat5(cur) : cur)
  }, [])
  return res
}

const arr = [1, [2, 3], [[[[[[[7]]]]]]]]

console.log('flat5', flat5(arr))
