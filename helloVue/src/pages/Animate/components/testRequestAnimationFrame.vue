<template>
  <div class="box" ref="box">
    {{ hour }} 时 {{ minute }} 分 {{ second }} 秒
  </div>
</template>

<script>
export default {
  name: 'TestRequestAnimationFrame',
  data () {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      nowTimestamp: 0, // 开始时间
      endTimestamp: 1565692226000, // 结束时间
      timeDiff: 0, // 时间差 / 1000 秒为单位
      leftTime: 1, // 剩余时间戳
      timeTag: Date.now() // 上一帧的时间
    }
  },
  methods: {
    timeCountDown () {
      if (this.leftTime <= 0) {
        cancelAnimationFrame(this.timeCountDown)
        return false
      }
      let dateNow = Date.now()
      if (dateNow - this.timeTag > 1000) {
        this.nowTimestamp = new Date().getTime()
        this.timeDiff = (this.endTimestamp - this.nowTimestamp) / 1000

        this.day = Math.floor(this.timeDiff / (24 * 60 * 60)) // 计算天数
        this.leftTime = this.timeDiff % (24 * 60 * 60)

        this.hour = Math.floor(this.leftTime / (60 * 60)) // 计算小时
        this.leftTime = this.leftTime % (60 * 60)

        this.minute = Math.floor(this.leftTime / 60) // 计算分钟
        this.leftTime = this.leftTime % (60)

        this.second = Math.floor(this.leftTime) // 计算秒

        this.timeTag = Date.now()
      }
      requestAnimationFrame(this.timeCountDown)
    }
  },
  mounted () {
    requestAnimationFrame(this.timeCountDown)
  }
}
</script>

<style lang="scss" scoped>
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 90px;
  border: 1px solid black; /*no*/
  background: aqua;
}
</style>
