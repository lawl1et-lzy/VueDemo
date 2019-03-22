<template>
  <div id="div1">

  </div>
</template>

<script>
import './Api'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  created () {
    let arr = [1, 2, 3, 54, 5].find(item => item === '2')
    console.log(arr)
  }
}
</script>

<style scoped>

</style>
