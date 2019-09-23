<template>
  <div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script>
import Time from '@/util/count-down'
export default {
  name: 'CountDown4',
  data () {
    return {
      time: '00:00:00',
      timeA: ''
    }
  },
  mounted () {
    this.timeA = new Time({
      startTime: 1566528240000,
      endTime: 1566538570000,
      format: '{h}-{m}-{s}',
      fn: (res) => {
        let {response: {errorCode, hintMessage}, data} = res
        if (!errorCode) {
          this.time = data
          console.log('success', data)
        } else {
          console.log('error hintMessage', hintMessage)
        }
      }
    })
    this.timeA.start()
  }
}
</script>

<style lang="scss" scoped>

</style>
