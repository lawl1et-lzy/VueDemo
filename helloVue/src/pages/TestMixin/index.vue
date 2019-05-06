<template>
  <div>

  </div>
</template>

<script>
import MixinB from './mixins/B.mixin'
const mixin = [MixinB]
export default {
  name: 'Index',
  mixins: mixin,
  // extends: this.mixinsCom,
  data () {
    return {
      mixinsCom: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
