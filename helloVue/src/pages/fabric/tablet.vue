<template>
  <div class="main">
    <div class="btn-group">
      <button class="btn" @click="openPenTouchPoint()">open</button>
      <button class="btn" @click="closePenTouchPoint()">close</button>
    </div>
    <div class="content">
      <canvas class="canvas" id="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import { fabric } from 'fabric'
import canvasHelper from '../../js/CanvasDataHelper'
import TabletHelper from '../../js/tabletHelper'
// import datas from '../../js/test'
let tabletHelper
export default {
  data () {
    return {
    }
  },
  mounted () {
    tabletHelper = new TabletHelper()
    canvasHelper.ctxObj = new fabric.Canvas('canvas', {
      width: 891,
      height: 630,
      skipTargetFind: true,
      selectable: false,
      selection: false
    })
    // for (let item of datas) {
    //   this.handleMsg(item)
    // }
  },
  methods: {
    openPenTouchPoint () {
      tabletHelper.openPenTouchPoint().getMessage((data) => {
        console.log('tablet child getMessage', data)
        const { data: pointer } = JSON.parse(data)
        this.handleMsg(pointer)
      })
    },
    closePenTouchPoint () {
      tabletHelper.closePenTouchPoint()
    },
    // 处理数据
    handleMsg (msg) {
      const rmt = msg[0]
      const x = msg[1]
      const y = msg[2]
      let lineCache = {}
      switch (rmt) {
        case 2:
          lineCache.points = `M${x} ${y}`
          lineCache.color = 'red'
          lineCache.width = 4
          canvasHelper.mct2LongLineMap['lawl1et'] = lineCache
          break
        case 3:
          lineCache = canvasHelper.mct2LongLineMap['lawl1et'] || {}
          lineCache.points += `L${x} ${y}`
          canvasHelper.drawObj = new fabric.Path(lineCache.points, {
            stroke: lineCache.color,
            strokeWidth: lineCache.width,
            fill: false,
            strokeUniform: true,
            strokeLineCap: 'round',
            strokeLineJoin: 'round'
          })
          canvasHelper.ctxObj.add(canvasHelper.drawObj)
          break
        case 1:
          lineCache = canvasHelper.mct2LongLineMap['lawl1et'] || {}
          lineCache.points += `L${x} ${y}`
          canvasHelper.drawObj = new fabric.Path(lineCache.points, {
            stroke: lineCache.color,
            strokeWidth: lineCache.width,
            fill: false,
            strokeUniform: true,
            strokeLineCap: 'round',
            strokeLineJoin: 'round'
          })
          canvasHelper.ctxObj.add(canvasHelper.drawObj)
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  font-size: 30px;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .btn-group {
    width: 600px; /*no*/
    margin: 20px;
    .btn {
      padding: 10px 20px;
      border-radius: 4px;
      border: 1px solid cadetblue; /*no*/
      font-size: 28px;/*px*/
    }
  }
  .content {
    width: 891px; /*no*/
    height: 630px; /*no*/
    border: 1px solid red;
  }
}
</style>
