<template>
  <div>
    <div class="times"></div>
  </div>
</template>

<script>
/**
 * 倒计时 60s
 */
import {_timeAnimation} from './countDown3.js'
export default {
  name: 'CountDown3',
  data () {
    return {

    }
  },
  mounted () {
    _timeAnimation(Date.now(), 1553405076000)
  }
}
</script>

<style scoped>

</style>
