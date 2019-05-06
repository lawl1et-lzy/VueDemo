<template>
  <div>
    PageB
  </div>
</template>

<script>
export default {
  name: 'PageB',
  methods: {
    postMessage (event) {
      console.log('PageB', event)
    }
  },
  mounted () {
    window.addEventListener('message', this.postMessage, false)

    // window.top.postMessage('i am from child', '*')
  }
}
</script>

<style lang="scss" scoped>

</style>
