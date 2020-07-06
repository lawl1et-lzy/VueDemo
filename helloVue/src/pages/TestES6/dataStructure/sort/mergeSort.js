/**
 * 归并排序: 采用分治法（Divide and Conquer）的一个典型的应用
 * 算法
 * 1. 时间复杂度：O (nlogn)
 * 2. 空间复杂度：O (n)
 */
function merge (leftArr, rightArr, fn) {
  let result = []
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (fn(leftArr[0], rightArr[0]) < 0) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  return result.concat(leftArr).concat(rightArr)
}

function mergeSort (arr, fn = (a, b) => a - b) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr
  const {length} = arr
  const middle = Math.floor(length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  return merge(mergeSort(leftArr), mergeSort(rightArr), fn)
}

let arr = [5, 4, 3, 2, 1]
const res = mergeSort(arr, (a, b) => a - b)
console.log(res)
