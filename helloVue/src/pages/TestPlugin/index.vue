<template>
  <div class="wrap">
    123阿萨德阿萨德阿萨德阿萨德爱上的
    <div @click="handleBtn">button</div>
  </div>
</template>

<script>
import { toast } from './plugin/index.js'
export default {
  name: 'Plugin',
  mounted () {

  },
  methods: {
    handleBtn () {
      toast({message: `消息提示1`, duration: 30000, iconClass: 'icon-spinner3'})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
