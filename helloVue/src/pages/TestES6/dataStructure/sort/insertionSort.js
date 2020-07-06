/**
 * 插入排序: 将数据对比已排序数组项
 * 算法
 * 1. 时间复杂度: 平均时间复杂度 O(n*n)、最好的情况 O(n)、最差的情况 O(n*n)
 */

function insertSort (arr, fn = (a, b) => a - b) {
  if (!Array.isArray(arr) || arr.length === 0) return arr
  const { length } = arr
  // for (let i = 1; i < length; i++) {
  //   let temp = arr[i] // 3
  //   let j = i // 2
  //   for (; j > 0; j--) {
  //     if (temp >= arr[j - 1]) {
  //       break
  //     }
  //     arr[j] = arr[j - 1]
  //   }
  //   arr[j] = temp
  // }

  for (let i = 1; i < length; i++) {
    let temp = arr[i]
    let j = i
    while (j > 0) {
      if (fn(temp, arr[j - 1]) > 0) {
        break
      }
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

let arr = [5, 4, 3, 2, 1]
const res = insertSort(arr, (a, b) => a - b)
console.log(res)
