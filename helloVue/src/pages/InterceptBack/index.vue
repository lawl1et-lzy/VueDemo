<template>
  <div>
    InterceptBack
    <button @click="handleBackConfirm">go back</button>
  </div>
</template>

<script>
// import preventBack from './back.mixin.js'
export default {
  // mixins: [preventBack],
  name: 'InterceptBack',
  data () {
    return {
      isback: true
    }
  },
  // watch: {
  //   isback: {
  //     handler (n) {
  //       if (n) {
  //         console.log('n', n)
  //         window.history.pushState(null, null, document.URL)
  //       }
  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    handleBackConfirm () {
      window.history.pushState(null, null, document.URL)
      alert(111)
    }
  },
  mounted () {
    // 向历史记录中插入了当前页
    window.history.pushState(null, null, window.location.href)
    window.addEventListener('popstate', this.handleBackConfirm, false)
  },
  destroyed () {
    window.removeEventListener('popstate', this.handleBackConfirm, false)
  }
}
</script>

<style lang="scss" scoped>

</style>
