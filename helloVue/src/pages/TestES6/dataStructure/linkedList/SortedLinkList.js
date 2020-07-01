// 有序链表
import { defaultEquals } from './util'
import LinkedList from './LinkedList'

class SortedLinkList extends LinkedList {
  constructor (equalsFn = defaultEquals) {
    super(equalsFn)
  }
  insert (element) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }
  getIndexNextSortedElement (element) {
    let current = this.head
    let i = 0
    for (; i < this.count && current; i++) {
      const comp = this.defaultCompare(element, current.element)
      if (comp === -1) {
        return i
      }
      current = current.next
    }
    return i
  }
  defaultCompare (a, b) {
    if (a === b) return 0
    return a < b ? -1 : 1
  }
}

export default SortedLinkList
