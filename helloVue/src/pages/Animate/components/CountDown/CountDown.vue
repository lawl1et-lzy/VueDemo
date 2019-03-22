<template>
  <div>
    <canvas class="canvas" width="500" height="500" style="background:#000;"></canvas>
  </div>
</template>

<script>
/**
 * 圆环
 */
export default {
  name: 'CountDown',
  data () {
    return {
      canvas: '',
      context: '',
      centerX: '',
      centerY: '',
      rad: '',
      speed: '',
      animateId: '',
      remainTime: Date.now(),
      currtime: ''
    }
  },
  mounted () {
    this.canvas = document.querySelector('.canvas')
    this.context = this.canvas.getContext('2d')
    // 计算圆心距离
    this.centerX = this.canvas.width / 2
    this.centerY = this.canvas.height / 2
    this.rad = Math.PI * 2 / 60 // 平分60
    this.speed = 60

    window.requestAnimationFrame(this.drawFram)
  },
  methods: {
    drawFram () {
      this.currtime = Date.now()
      if (this.currtime - this.remainTime > 1000 && this.speed <= 0) {
        this.redCircle()
        this.text(this.speed)
        this.whiteCircle(this.speed)
        this.remainTime = Date.now()
        this.speed -= 1
      }
    },
    whiteCircle (n) {
      this.context.save()
      this.context.strokeStyle = 'red' // 设置描边样式
      this.context.lineWidth = 5 // 设置线宽
      this.context.beginPath() // 路径开始
      this.context.arc(this.centerX, this.centerY, 100, -Math.PI / 2, -Math.PI / 2 + this.rad, false)
      this.context.stroke()
      this.context.closePath()
      this.context.restore()
    },
    redCircle () {
      this.context.save()
      this.context.beginPath()
      this.context.lineWidth = 2
      this.context.strokeStyle = '#01AEF0'
      this.context.arc(this.centerX, this.centerY, 100, 0, Math.PI * 2, false)
      this.context.stroke()
      this.context.closePath()
      this.context.restore()
    },
    text (n) {
      this.context.save()
      this.context.strokeStyle = '#BCDF00'
      this.context.font = '40px Arial'
      this.context.strokeText(`${n.toFixed(0) - 1}`, this.centerX - 30, this.centerY + 10)
      this.context.stroke()
      this.context.restore()
    }
  }
}
</script>

<style lang="scss" scoped>
.canvas{
  width: "500";
  height: "500";
}
</style>
