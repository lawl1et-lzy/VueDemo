// 队列 => 先进先出
export default class Queue {
  constructor () {
    this.queue = new Map()
    this.firstIdx = 0
  }
  // 末尾添加一个或者多个项
  enqueue (...param) {
    for (let item of param) {
      const size = this.queue.size
      this.queue.set(size, item)
    }
    return this.queue.size
  }
  // 移除第一个，并返回
  dequeue () {
    if (this.isEmpty()) return undefined
    let cache = this.queue.get(this.firstIdx)
    this.queue.delete(this.firstIdx)
    this.firstIdx++
    return cache
  }
  clear () {
    this.queue.clear()
  }
  // 获取第一个
  peek () {
    return this.queue.get(this.firstIdx)
  }
  isEmpty () {
    return !this.queue.size
  }
  size () {
    return this.queue.size
  }
}
