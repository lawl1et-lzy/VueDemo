function sort (_arr) {
  if (!Array.isArray(_arr) || _arr.length <= 1) return _arr
  const arr = JSON.parse(JSON.stringify(_arr))
  const { length } = arr
  const middleIdx = Math.floor(length / 2)
  const middleElem = arr.splice(middleIdx, 1)[0]

  let leftArr = []
  let rightArr = []

  for (let i = 0; i < arr.length; i++) {
    if (middleElem > arr[i]) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return sort(leftArr).concat([middleElem], sort(rightArr))
}

function search (_arr, val) {
  if (!Array.isArray(_arr) || _arr.length === 0) return -1
  const arr = sort(_arr)
  let low = 0
  let high = arr.length
  while (low < high) {
    let privotIdx = Math.floor((low + high) / 2)
    let privot = arr[privotIdx]
    if (val > privot) {
      low = privotIdx + 1
    } else if (val < privot) {
      high = privotIdx - 1
    } else {
      return 1
    }
  }
  return -1
}

let arr = [5, 1, 2, 64, 23, 2]
const res = search(arr, 2)
console.log('arr', arr)
console.log('res', res)
