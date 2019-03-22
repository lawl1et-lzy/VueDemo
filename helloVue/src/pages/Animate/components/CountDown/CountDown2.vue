<template>
  <div>
    <div id="clock">1:00</div>
  </div>
</template>

<script>
/**
 * 倒计时 60s
 */
export default {
  name: 'CountDown2',
  data () {
    return {

    }
  },
  mounted () {
    let start = Date.now() // 系统返回的时间戳
    let dur = 60000
    let clock = document.getElementById('clock')

    requestAnimationFrame(function f () {
      var p = (Date.now() - start) / dur // 判断当前剩余多少分钟

      if (p < 1) {
        var second = 0 | ((dur * (1 - p)) / 1000)
        var minute = 0 | (second / 60)
        second = ('0' + (second % 60)).slice(-2)

        clock.innerHTML = minute + ':' + second
        requestAnimationFrame(f)
      } else {
        clock.innerHTML = '0:00'
      }
    })
  }
}
</script>

<style scoped>

</style>
