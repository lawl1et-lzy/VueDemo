function deepCopy (target, map = new Map()) {
  if (typeof target !== 'object' || target == null) return target

  let result = Array.isArray(target) ? [] : {}

  if (map.get(target)) return map.get(target)

  map.set(target, result)

  for (let key in target) {
    result[key] = deepCopy(target[key], map)
  }
  return result
}

export default deepCopy
