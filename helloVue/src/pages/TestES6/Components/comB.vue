<template>
  <div>
    组件B上的值：{{provideMsg}}
  </div>
</template>

<script>
export default {
  name: 'ComB',
  inject: ['provideMsg']
}
</script>

<style lang="scss" scoped>

</style>
