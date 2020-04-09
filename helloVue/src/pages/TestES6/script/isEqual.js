function isEqual (obj1, obj2) {
  // 有其中一个不是对象
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2

  // 如果传入一样的数据
  if (obj1 === obj2) return true

  // 判断key值的个数
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

  // 递归判断
  for (let key in obj1) {
    const result = isEqual(obj1[key], obj2[key])
    if (!result) return false
  }
  return true
}
