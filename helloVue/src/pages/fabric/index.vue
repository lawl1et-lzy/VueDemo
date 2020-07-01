<template>
  <div class="wrap">
    <div class="btn-group">
      <button class="btn triangle" @click="toolClick('triangle')">triangle</button>
      <button class="btn rect" @click="toolClick('rectangle')">rect</button>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { fabric } from 'fabric'
let canvas = {}
export default {
  name: 'Fabric',
  data () {
    return {
    }
  },
  mounted () {
    canvas = new fabric.Canvas('canvas', {
      width: 300,
      height: 300,
      isDrawingMode: false, // 自由绘图
      selectable: true, // 控件不能被选择，不会被操作
      selection: true // 画板显示选中
    })
    canvas.on({
      'mouse:down': e => {
        // console.log('mouse:down', e)
      },
      'mouse:move': e => {
        // console.log('mouse:move', e)
      },
      'mouse:up': e => {
        // console.log('mouse:up', e)
      },
      'selection:created': e => {
        console.log('selection:created', e)
      },
      'selection:updated': e => {
        console.log('selection:updated', e)
      },
      'selection:cleared': e => {
        console.log('selection:cleared', e)
      },
      'object:modified': e => {
        console.log('object:modified', e)
      }
    })
  },
  methods: {
    toolClick (shape) {
      switch (shape) {
        case 'triangle':
          this.createTriangle()
          break
        case 'rectangle':
          this.createRectangle()
          break
      }
    },
    createTriangle () {
      const triangle = new fabric.Triangle({
        width: 100, height: 100, fill: 'blue', left: 50, top: 50
      })
      canvas.add(triangle)
    },
    createRectangle () {
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 100,
        height: 100
      })
      canvas.add(rect)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btn-group {
    margin: 20px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    z-index: 99;
    .btn {
      margin-top: 20px;
      padding: 10px 20px;
      border-radius: 4px;
      border: 1px solid cadetblue; /*no*/
      font-size: 28px;/*px*/
    }
  }
  #canvas {
    border: 1px solid red; /*no*/
  }
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
