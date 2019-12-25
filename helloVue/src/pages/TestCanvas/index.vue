<template>
  <div class="canvas-wrap">
    <div class="expect">
      <img class="expect-img" :src="img" alt="" @load="handleImgOnload">
    </div>
    <div class="btn-translate" @click="handleTranslate">translate</div>
    <br />
    <div class="expect-1">
      <img v-if="translateImg" :src="translateImg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestCanvas',
  data () {
    return {
      img: require('../../images/help.jpg'),
      imgEl: null,
      translateImg: null
    }
  },
  methods: {
    handleImgOnload (e) {
      this.imgEl = e.target
    },
    handleTranslate () {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      // const scale = 0.5
      // ctx.scale(scale, scale)
      const expectWidth = this.imgEl.naturalWidth
      const expectHeight = this.imgEl.naturalHeight
      ctx.save()
      // 90
      // canvas.width = expectHeight
      // canvas.height = expectWidth

      // ctx.rotate((90 * Math.PI) / 180)
      // ctx.drawImage(this.imgEl, 0, -expectHeight, expectWidth, expectHeight)

      // 180
      // canvas.width = expectWidth
      // canvas.height = expectHeight

      // ctx.rotate((180 * Math.PI) / 180)
      // ctx.drawImage(this.imgEl, -expectWidth, -expectHeight, expectWidth, expectHeight)

      // -90 | 270
      // canvas.width = expectHeight
      // canvas.height = expectWidth

      // ctx.rotate(-(90 * Math.PI) / 180)
      // ctx.drawImage(this.imgEl, -expectWidth, 0, expectWidth, expectHeight)

      // 水平翻转
      // canvas.width = expectWidth
      // canvas.height = expectHeight

      // ctx.scale(1, -1)
      // ctx.drawImage(this.imgEl, 0, -expectHeight, expectWidth, expectHeight)

      // 垂直翻转
      // canvas.width = expectWidth
      // canvas.height = expectHeight

      // ctx.scale(-1, 1)
      // ctx.drawImage(this.imgEl, -expectWidth, 0, expectWidth, expectHeight)

      // canvas.width = expectWidth
      // canvas.height = expectHeight
      // ctx.translate(canvas.width, 0)
      // ctx.scale(-1, 1)
      // ctx.drawImage(this.imgEl, 0, 0, expectWidth, expectHeight)

      // 平移
      // canvas.width = expectWidth
      // canvas.height = expectHeight
      // ctx.translate(10, 10)
      // ctx.drawImage(this.imgEl, -10, -10, expectWidth, expectHeight)

      /**
       * 5
       * 基于浏览器坐标：Y轴对称 逆时针旋转 90
       * 基于画布坐标：Y轴对称 顺时针旋转 90
       */
      // canvas.width = expectHeight
      // canvas.height = expectWidth
      // ctx.translate(canvas.width, 0)
      // ctx.scale(-1, 1)
      // ctx.rotate((90 * Math.PI) / 180)
      // ctx.drawImage(this.imgEl, 0, -canvas.width, expectWidth, expectHeight)

      /**
       * 5
       * 基于浏览器坐标：X轴对称 顺时针旋转 90
       * 基于画布坐标：X轴对称 逆时针旋转 90
       */
      // canvas.width = expectHeight
      // canvas.height = expectWidth
      // ctx.translate(canvas.width, 0)
      // ctx.scale(1, -1)
      // ctx.rotate(-(90 * Math.PI) / 180)
      // ctx.drawImage(this.imgEl, 0, -canvas.width, expectWidth, expectHeight)

      /**
       * 5
       * 基于浏览器坐标：顺时针旋转 90 Y轴对称
       * 基于画布坐标：顺时针旋转 90 x轴对称
       */
      // canvas.width = expectHeight
      // canvas.height = expectWidth
      // ctx.rotate((90 * Math.PI) / 180)
      // ctx.scale(1, -1)
      // ctx.drawImage(this.imgEl, 0, 0, expectWidth, expectHeight)

      /**
       * 7
       * 基于浏览器坐标：顺时针旋转 90 x轴对称
       * 基于画布坐标：顺时针旋转 90 y轴对称
       */
      canvas.width = expectHeight
      canvas.height = expectWidth
      ctx.rotate((90 * Math.PI) / 180)
      ctx.scale(-1, 1)
      ctx.drawImage(this.imgEl, -expectWidth, -expectHeight, expectWidth, expectHeight)

      ctx.restore()
      this.translateImg = canvas.toDataURL('image/jpeg')
    }
  }
}
</script>

<style lang="scss" scoped>
.canvas-wrap{
  padding: 20px;
  .expect-1{
    width: 600px;
  }
  .expect {
    width: 220px;
    display: flex;
    .img-desc{
      width: 100%;
      margin-left: 10px;
      flex-grow: 1;
      flex-shrink: 0;
    }
  }
  .btn-translate{
    width: 200px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 50px 0;
  }
}
</style>
