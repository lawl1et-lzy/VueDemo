<template>
  <div class="container"></div>
</template>

<script>
// import DeQueue from './dataStructure/DeQueue'
// import palindrome from './dataStructure/palindrome'
import LinkedList from './dataStructure/linkedList/LinkedList'
import DoublyLinkedList from './dataStructure/linkedList/DoublyLinkedList'
import CircularLinkedList from './dataStructure/linkedList/CircularLinkedList'
import SortedLinkList from './dataStructure/linkedList/SortedLinkList'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  mounted () {
    window.linkedList = new LinkedList()
    window.doublyLinkedList = new DoublyLinkedList()
    window.circularLinkedList = new CircularLinkedList()
    window.sortedLinkList = new SortedLinkList()
  },
  methods: {

  }
}
</script>

<style scoped>
.num {
  padding: 20px;
}
</style>
