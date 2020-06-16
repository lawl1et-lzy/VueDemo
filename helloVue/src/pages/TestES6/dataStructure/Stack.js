// 栈 => 先进后出
export default class Stack {
  constructor () {
    this.stack = new Map()
  }
  push (...param) {
    for (let item of param) {
      const size = this.stack.size
      this.stack.set(size, item)
    }
    return this.stack.size
  }
  pop () {
    if (this.isEmpty()) return undefined
    const size = this.stack.size - 1
    const res = this.stack.get(size)
    this.stack.delete(size)
    return res
  }
  size () {
    return this.stack.size
  }
  clear () {
    this.stack.clear()
  }
  isEmpty () {
    return !this.stack.size
  }
}
