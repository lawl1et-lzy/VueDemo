<template>
  <div class="wrap">
    <button @click="handleClick">button</button>
  </div>
</template>

<script>
// import Dialog from './dialog/index.js'
export default {
  name: 'Index',
  methods: {
    handleClick () {
      // let dialog = Dialog({
      //   title: '提示',
      //   subtitle: 'subtitle',
      //   confirmText: '确认',
      //   cancelText: '取消',
      //   confirm () {
      //     dialog.close()
      //   },
      //   cancel () {
      //     dialog.close()
      //   }
      // })
      // location.href = 'http://www.baidu.com'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
