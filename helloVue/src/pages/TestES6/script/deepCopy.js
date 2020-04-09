function deepCopy (target) {
  if (typeof target !== 'object' || target == null) return target
  let result = Array.isArray(target) ? [] : {}
  for (let key in target) {
    result[key] = deepCopy(target[key])
  }
  return result
}

export default deepCopy
