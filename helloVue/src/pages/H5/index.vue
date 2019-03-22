<template>
  <div v-html="key">
    123
    <!-- {{key}} -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      key: 'slim<b>strong</b>'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
