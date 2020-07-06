/**
 * 选择排序: 找到数据结构中的最小(大)值，并将其放在第一位
 * 算法
 * 1. 时间复杂度: 平均时间复杂度 O(n*n)
 * 2. 空间复杂度: O(1)
 */
function selectionSort (arr, fn = (a, b) => a - b) {
  if (!Array.isArray(arr) || arr.length === 0) return arr
  const { length } = arr
  let index
  for (let i = 0; i < length - 1; i++) {
    index = i
    for (let j = i; j < length; j++) {
      if (fn(arr[index], arr[j]) > 0) {
        index = j
      }
    }
    if (i !== index) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
    }
  }
  return arr
}

let arr = [5, 4, 3, 2, 1]
const res = selectionSort(arr, (a, b) => a - b)
console.log(res)
