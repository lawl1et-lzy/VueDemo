// 数据字典
import { defaultToString } from './util'
class Dictionary {
  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  hasKey (key) {
    return this.table[this.toStrFn(key)] != null
  }
  set (key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
}

class ValuePair {
  constructor (key, value) {
    this.key = key
    this.value = value
  }
  toString () {
    return `[#${this.key}: ${this.value}]`
  }
}

export default Dictionary
