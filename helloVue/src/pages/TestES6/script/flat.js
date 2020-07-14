const flatArray = (arr) => {
  if (!Array.isArray(arr)) return arr
  const hasArr = arr.some(item => Array.isArray(item))
  if (!hasArr) return arr
  return flatArray(Array.prototype.concat.apply([], arr))
}

const flatArray1 = (arr) => {
  if (!Array.isArray(arr)) return arr
  while (arr.some(item => Array.isArray(item))) {
    arr = Array.prototype.concat.apply([], arr)
  }
  return arr
}

const flatArray2 = (arr) => {
  if (!Array.isArray(arr)) return arr
  return arr.toString().split(',').map((val) => parseInt(val))
}

const arr = [1, [2, 3], [[[[[[[7]]]]]]]]

console.log('flatArray', flatArray(arr))
console.log('flatArray1', flatArray1(arr))
console.log('flatArray2', flatArray2(arr))
