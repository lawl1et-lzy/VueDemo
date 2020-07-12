// function quickSort (_arr) {
//   if (!Array.isArray(_arr) || _arr.length === 0) return _arr
//   const arr = JSON.parse(JSON.stringify(_arr))

//   const pivotIdx = Math.floor(arr.length / 2)
//   const pivot = arr.splice(pivotIdx, 1)[0]

//   let leftArr = []
//   let rightArr = []

//   for (let item of arr) {
//     if (item < pivot) {
//       leftArr.push(item)
//     } else {
//       rightArr.push(item)
//     }
//   }

//   return quickSort(leftArr).concat([pivot], quickSort(rightArr))
// }

function mergeSort (arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr

  const { length } = arr
  const pivotIdx = Math.floor(length / 2)
  const leftArr = arr.slice(0, pivotIdx)
  const rightArr = arr.slice(pivotIdx)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge (leftArr, rightArr) {
  let result = []
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  return result.concat(leftArr).concat(rightArr)
}

let arr = [15, 12, 3, 2, 7]

function binarySearch (arr, value) {
  const res = mergeSort(arr)
  console.log('res', res)
  let low = 0
  let high = res.length
  while (low <= high) {
    const pivotIdx = Math.floor((low + high) / 2)
    const pivot = res[pivotIdx]
    if (pivot === value) {
      return pivotIdx
    } else if (pivot < value) {
      low = pivotIdx + 1
    } else if (pivot > value) {
      high = pivotIdx - 1
    }
  }
  return -1
}
console.log('binarySearch', binarySearch(arr, 3))
