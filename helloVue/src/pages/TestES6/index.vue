<template>
  <div class="container">
  </div>
</template>

<script>
// import DeQueue from './dataStructure/DeQueue'
// import palindrome from './dataStructure/palindrome'
// import LinkedList from './dataStructure/linkedList/LinkedList'
// import DoublyLinkedList from './dataStructure/linkedList/DoublyLinkedList'
// import CircularLinkedList from './dataStructure/linkedList/CircularLinkedList'
// import SortedLinkList from './dataStructure/linkedList/SortedLinkList'
// import Dictionary from './dataStructure/Dictionary'
// import './dataStructure/Recursion'
import BinarySearchTree from './dataStructure/tree/BinarySearchTree'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  created () {
    const binarySearchTree = new BinarySearchTree()
    window.binarySearchTree = binarySearchTree
    binarySearchTree.insert(11)
    binarySearchTree.insert(7)
    binarySearchTree.insert(15)
    binarySearchTree.insert(5)
    binarySearchTree.insert(3)
    binarySearchTree.insert(9)
    binarySearchTree.insert(8)
    binarySearchTree.insert(10)
    binarySearchTree.insert(13)
    binarySearchTree.insert(12)
    binarySearchTree.insert(14)
    binarySearchTree.insert(20)
    binarySearchTree.insert(18)
    binarySearchTree.insert(25)
    binarySearchTree.insert(6)

    // const printNode = (value) => console.log(value)
    // binarySearchTree.postOrderTraverse(printNode)

    // console.log('min', binarySearchTree.min())
    // console.log('max', binarySearchTree.max())

    console.log('remove', binarySearchTree.remove(7))
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
