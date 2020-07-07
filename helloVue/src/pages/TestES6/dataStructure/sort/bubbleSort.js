/**
 * 冒泡排序: 比较所有相邻的两个项，如果第一个比第二个大，则交换他们
 * 算法
 * 1. 时间复杂度: 平均时间复杂度 O(n*n)、最好的情况 O(n)、最差的情况 O(n*n)
 * 2. 空间复杂度: O(1)
 *
 * 优化点:
 * 1. 设置一个标记位，如果某次循环后，没有任何两数进行交换，就将标记为true，表示排序完成
 * 2. 从内循环减去外循环中已跑过的轮数，就可以避免内循环中所有不必要的比较
 */
function bubbleSort (arr, fn = (a, b) => a - b) {
  if (!Array.isArray(arr) || arr.length === 0) return arr
  const { length } = arr
  for (let i = 0; i < length; i++) {
    let done = true // 优化点 1
    for (let j = 0; j < length - 1 - i; j++) { // 优化点 2
      const a = arr[j]
      const b = arr[j + 1]
      if (fn(a, b) > 0) {
        // [a, b] = [b, a] 不能这么写
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        done = false
      }
    }
    if (done) {
      break
    }
  }
  return arr
}
// let arr = [5, 1, 2, 64, 23, 2]
let arr = [
  {
    name: 'lin',
    age: 25
  },
  {
    name: 'lawl1et',
    age: 21
  },
  {
    name: 'niya',
    age: 18
  }
]
const res = bubbleSort(arr, (a, b) => a.age - b.age)
console.log(res)
