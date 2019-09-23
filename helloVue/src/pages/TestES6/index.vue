<template>
  <div id="div">
    <v-com :content="{a: 1}"></v-com>
  </div>
</template>

<script>
// import './script/Test'
import VCom from './Com'
export default {
  name: 'Index',
  data () {
    return {
      obj: {
        a: 1
      }
    }
  },
  components: {
    VCom
  },
  methods: {
    fn (...param) {
      console.log(...param)
    }
  },
  created () {
    this.fn('a', 'b', 'c')
  }
}
</script>

<style scoped>

</style>
