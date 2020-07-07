/**
 * 快速排序: 采用分治法（Divide and Conquer）
 * 算法
 * 1. 时间复杂度：O (nlogn)
 * 2. 空间复杂度：O (n)
 */

// 方法 1 比较难
function quick (array, left, right) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
  return array
}
function partition (array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (array[i] - pivot === -1) {
      i++
    }
    while (array[j] - pivot === 1) {
      j--
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
  }
  return i
}
function quickSort1 (arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr
  return quick(arr, 0, arr.length - 1)
}

// 方法 2 不改变原数组
function quickSort2 (_arr, fn = (a, b) => a - b) {
  if (!Array.isArray(_arr) || _arr.length < 1) return _arr
  const arr = JSON.parse(JSON.stringify(_arr))
  // 1. 计算出中间值
  let pivotIdx = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIdx, 1)[0] // 用 splice 会改变原数组

  // 2. 初始化左右两边数组
  let left = []
  let right = []

  // 3. 将大于中间值的数放在右边，将小于中间值的数放在左边
  for (let item of arr) {
    if (fn(item, pivot) < 0) {
      left.push(item)
    } else if (fn(item, pivot) > 0) {
      right.push(item)
    }
  }
  return quickSort2(left).concat([pivot], quickSort2(right))
}

// 方法 2 改变原数组
function swap (A, i, j) {
  // const t = A[i]
  // A[i] = A[j]
  // A[j] = t
  return ([A[i], A[j]] = [A[j], A[i]])
}

/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function divide (A, p, r) {
  const x = A[r - 1]
  let i = p - 1

  for (let j = p; j < r - 1; j++) {
    if (A[j] <= x) {
      i++
      swap(A, i, j)
    }
  }

  swap(A, i + 1, r - 1)

  return i + 1
}

/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function qsort (A, p = 0, r) {
  r = r || A.length

  if (p < r - 1) {
    const q = divide(A, p, r)
    qsort(A, p, q)
    qsort(A, q + 1, r)
  }

  return A
}

// let arr = [5, 4, 3, 2, 1]
let arr = [15, 12, 3, 2, 7]
const res = qsort(arr)
console.log('arr', arr)
console.log('res', res)
