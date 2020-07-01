// 链表
import Node from './Node'
import { defaultEquals } from './util'

export default class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.equalsFn = equalsFn
    this.head = undefined
    this.count = 0
  }
  push (element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      // 直到找到最后一个
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        let current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(current.element, element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  getElementAt (index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
  toString () {
    if (this.head == null) return ''
    // let objStirng = `${this.head.element}`
    // TODO:
  }
  isEmpty () {
    return this.size() === 0
  }
  size () {
    return this.count
  }
  getHead () {
    return this.head
  }
}
