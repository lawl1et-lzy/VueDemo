const defaultEquals = (a, b) => {
  return a === b
}

const defaultToString = (item) => {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
const defaultCompare = (a, b) => {
  if (a === b) return 0
  return a < b ? -1 : 1
}
export {
  defaultEquals,
  defaultToString,
  defaultCompare
}
