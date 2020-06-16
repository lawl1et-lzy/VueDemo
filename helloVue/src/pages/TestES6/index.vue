<template>
  <div class="container"></div>
</template>

<script>
import DeQueue from './dataStructure/DeQueue'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  mounted () {
    window.deQueue = new DeQueue()
    function fn (...args) {
      console.log(args)
    }
    this.promiseRetry(fn, 3)
  },
  methods: {
    promiseRetry (fn, times) {
      return function (...args) {
        return new Promise((resolve, reject) => {
          let error
          const retry = (fn, times) => {
            if (times) {
              const promiseInstance = fn.apply(this, args)
              promiseInstance.then(result => resolve(result)).catch(err => {
                error = err
                retry(fn, times - 1)
              })
            } else {
              reject(error)
            }
          }
          retry(fn, times)
        })
      }
    }
  }
}
</script>

<style scoped>
.num {
  padding: 20px;
}
</style>
