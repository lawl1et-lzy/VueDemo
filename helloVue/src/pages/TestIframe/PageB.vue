<template>
  <div class="page-b">
    PageB
    <router-link to="/">go to pageA</router-link>
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
