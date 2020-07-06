/**
 * 二分搜索
 */
function binarySearch (array, value) {
  // 这边可以将数组通过 [快速排序] 转化成 [有序数组]
  let low = 0
  let high = array.length
  while (low < high) {
    let midIdx = Math.floor((low + high) / 2)
    let midElem = array[midIdx]

    if (midElem === value) {
      return midIdx
    } else if (midElem > value) {
      high = midIdx - 1
    } else if (midElem < value) {
      low = midIdx + 1
    }
  }
  return -1
}

let arr = [1, 2, 3, 4, 5]
console.log(binarySearch(arr, 5))
