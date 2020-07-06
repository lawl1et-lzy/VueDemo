// Tree
import { defaultCompare } from '../util'
import Node from './Node'

export default class BinarySearchTree {
  constructor (compareFn = defaultCompare) {
    this.compareFn = compareFn // 用来比较节点值
    this.root = null // {1} Node 类型的根节点
  }
  // 向树中插入一个新的键
  insert (key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  // insert 的辅助函数
  insertNode (node, key) {
    if (this.compareFn(key, node.key) === -1) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  // 在树中查找一个键。如果节点存在，则返回 true; 如果不存在，则返回 false
  search (key) {
    return this.searchNode(this.root, key)
  }
  searchNode (node, key) {
    if (node == null) return false
    if (this.compareFn(key, node.key) === -1) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === 1) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  /**
   * 通过中序遍历方式遍历所有节点
   * 1. 上行顺序访问BST 所有节点，从最小到最大的顺序
   * 2. 应用：
   */
  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode (node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  /**
   * 通过先序遍历方式遍历所有节点
   * 1. 优先于后代节点的顺序访问每个节点的
   * 2. 应用：打印一个结构化的文档
   */
  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode (node, callback) {
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  /**
   * 通过后序遍历方式遍历所有节点
   * 1. 先访问节点的后代节点，再访问节点本身
   * 2. 应用：计算一个目录及其子目录中所有文件所占空间的大小。
   */
  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode (node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  // 返回树中最小的值/键
  min () {
    return this.minNode(this.root)
  }
  minNode (node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }
  // 返回树中最大的值/键
  max () {
    return this.maxNode(this.root)
  }
  maxNode (node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }
  // 从树中移除某个键
  remove (key) {
    this.root = this.removeNode(this.root, key)
  }
  // TODO: 不大懂
  removeNode (node, key) {
    if (node == null) {
      return null
    }
    if (this.compareFn(key, node.key) === -1) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === 1) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 1
      if (node.left == null && node.right == null) {
        node = null
        return node
      }
      // 2
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }
      // 3
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}

// const binarySearchTree = new BinarySearchTree()
// window.binarySearchTree = binarySearchTree
// binarySearchTree.insert(11)
// binarySearchTree.insert(7)
// binarySearchTree.insert(15)
// binarySearchTree.insert(5)
// binarySearchTree.insert(3)
// binarySearchTree.insert(9)
// binarySearchTree.insert(8)
// binarySearchTree.insert(10)
// binarySearchTree.insert(13)
// binarySearchTree.insert(12)
// binarySearchTree.insert(14)
// binarySearchTree.insert(20)
// binarySearchTree.insert(18)
// binarySearchTree.insert(25)
// binarySearchTree.insert(6)

// const printNode = (value) => console.log(value)
// binarySearchTree.postOrderTraverse(printNode)

// console.log('min', binarySearchTree.min())
// console.log('max', binarySearchTree.max())

// console.log('remove', binarySearchTree.remove(7))
