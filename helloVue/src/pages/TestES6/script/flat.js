function flat (arr) {
  let hasArr = arr.some(item => Array.isArray(arr))
  if (!hasArr) return arr
  let result = []
  result = Array.prototype.concat.apply([], arr)

  return flat(result)
}

export default flat
