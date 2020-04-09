<template>
  <div>
    组件 A 数据项：{{provideMsg}}
    <ComB></ComB>
  </div>
</template>

<script>
import ComB from './comB'
export default {
  name: 'ComA',
  components: {
    ComB
  },
  inject: ['provideMsg']
}
</script>

<style lang="scss" scoped>

</style>
