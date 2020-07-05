// 集合
const arr1 = new Set([1, 2, 3, 4, 5])
const arr2 = new Set([3, 4, 5, 6, 7])

// 并集
// const union = new Set([...arr1, ...arr2])
// console.log(...union)

// 交集
// const intersection = [...arr1].filter(item => arr2.has(item))
// console.log(intersection)

// 差集
// const difference = [...arr1].filter(item => !arr2.has(item))
// console.log(difference)

// 是否是子集
const isSub = [...arr1].filter(item => !arr2.has(item))
console.log(!isSub.length)
