// 双端队列
export default class DeQueue {
  constructor () {
    this.dequeue = new Map()
    this.firstIdx = 0
  }
  addFront (...param) {
    if (this.isEmpty()) {
      return this.addBack(...param)
    } else {
      for (let _idx in param) {
        let idx = Number(_idx)
        this.firstIdx = this.firstIdx - (idx || 1)
        this.dequeue.set(this.firstIdx, param[idx])
      }
      return this.dequeue.size
    }
  }
  addBack (...param) {
    for (let item of param) {
      const size = this.dequeue.size
      const _size = size + this.firstIdx
      this.dequeue.set(_size, item)
    }
    return this.dequeue.size
  }
  removeFront () {
    if (this.isEmpty()) return undefined
    const cache = this.dequeue.get(this.firstIdx)
    this.dequeue.delete(this.firstIdx)
    this.firstIdx++
    return cache
  }
  removeBack () {
    if (this.isEmpty()) return undefined
    const size = this.dequeue.size
    const _size = size + this.firstIdx - 1
    const cache = this.dequeue.get(_size)
    this.dequeue.delete(_size)
    return cache
  }
  peekFront () {
    if (this.isEmpty()) return undefined
    const cache = this.dequeue.get(this.firstIdx)
    return cache
  }
  peekBack () {
    if (this.isEmpty()) return undefined
    const size = this.dequeue.size
    const _size = size + this.firstIdx - 1
    const cache = this.dequeue.get(_size)
    return cache
  }
  clear () {
    this.dequeue.clear()
  }
  isEmpty () {
    return !this.dequeue.size
  }
  size () {
    return this.dequeue.size
  }
}
