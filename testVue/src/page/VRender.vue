<template>
  <div>
    <elem :show="show"></elem>
    <elem :show="!show"></elem>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('elem', {
  render (createElement) {
    if (this.show) {
      return createElement('p', 'true')
    } else {
      return createElement('p', 'false')
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
})
export default {
  name: 'VRender',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>

</style>
