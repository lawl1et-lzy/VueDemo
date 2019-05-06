<template>
  <div>
    pageA
    <iframe src="http://localhost:8080/pageb" frameborder="0" ref="iframe"></iframe>
  </div>
</template>

<script>
export default {
  name: 'PageA',
  methods: {
    postMessageA (data) {
      console.log('PageA', data)
    }
  },
  mounted () {
    this.$refs.iframe.contentWindow.onload = () => {
      this.$refs.iframe.contentWindow.postMessage(JSON.stringify({data: 'hahaha'}), '*')
    }

    // window.addEventListener('message', this.postMessage, false)
  }
}
</script>

<style lang="scss" scoped>

</style>
