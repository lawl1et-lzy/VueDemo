<template>
  <div class="wrap">
    <div class="btn-group">
      <button class="btn circle" @click="toolClick('circle')">circle</button>
      <button class="btn triangle" @click="toolClick('triangle')">triangle</button>
      <button class="btn rect" @click="toolClick('rect')">rect</button>
      <button class="btn rubber" @click="toolClick('rubber')">rubber</button>
      <button class="btn undo" @click="toolClick('undo')">undo</button>
      <button class="btn redo" @click="toolClick('redo')">redo</button>
      <button class="btn clear" @click="toolClick('clear')">clear</button>
      <button class="btn clear" @click="toImage">toImage</button>
    </div>
    <canvas id="canvas"></canvas>
    <img :src="dataURL" alt="">
  </div>
</template>

<script>
import { fabric } from 'fabric'
let canvas = {}
export default {
  name: 'Fabric',
  data () {
    return {
      mouseFrom: {},
      mouseTo: {},
      drawType: '',
      canvasObjectIndex: 0, // 画板对象的下标
      textbox: '',
      drawWidth: 2, // 笔触宽度
      color: 'red', // 画笔颜色
      drawingObject: null, // 当前绘制对象
      moveCount: 1, // 绘制移动计数器
      doDrawing: false, // 绘制状态
      dataURL: ''
    }
  },
  mounted () {
    canvas = new fabric.Canvas('canvas', {
      width: 600,
      height: 600,
      isDrawingMode: true, // 自由绘图
      selectable: false, // 控件不能被选择，不会被操作
      selection: false // 画板显示选中
    })
    canvas.freeDrawingBrush.color = this.color // 设置自由绘颜色
    canvas.freeDrawingBrush.width = this.drawWidth
    canvas.on({
      'mouse:down': e => {
        if (!this.doDrawing) return false
        console.log('mouse:down', e.pointer)
        this.mouseFrom.x = e.pointer.x
        this.mouseFrom.y = e.pointer.y
      },
      'mouse:move': e => {
        if (!this.doDrawing) return false
        // console.log('mouse:move', e.pointer)
        this.mouseTo.x = e.pointer.x
        this.mouseTo.y = e.pointer.y
        this.drawing()
      },
      'mouse:up': e => {
        if (!this.doDrawing) return false
        console.log('mouse:up', e.pointer)
        this.doDrawing = false
        canvas.selection = true
        this.drawingObject = null
        this.drawType = null
        this.mouseFrom = {}
        this.mouseTo = {}
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
    drawing () {
      if (this.drawingObject) {
        canvas.remove(this.drawingObject)
      }
      let canvasObject
      switch (this.drawType) {
        case 'triangle': // 等边三角形
          var height = this.mouseTo.y - this.mouseFrom.y
          canvasObject = new fabric.Triangle({
            top: this.mouseFrom.y,
            left: this.mouseFrom.x,
            width: Math.sqrt(Math.pow(height, 2) + Math.pow(height / 2.0, 2)),
            height: height,
            stroke: this.color,
            strokeWidth: this.drawWidth,
            fill: 'rgba(255,255,255,0)'
          })
          break
        default:
          break
      }
      if (canvasObject) {
      // canvasObject.index = getCanvasObjectIndex();
        canvas.add(canvasObject) // .setActiveObject(canvasObject)
        this.drawingObject = canvasObject
      }
    },
    toolClick (drawType) {
      this.drawType = drawType
      if (drawType === 'pen') {
        canvas.isDrawingMode = true
      } else if (drawType === 'remove') {
        canvas.selection = true
        canvas.selectable = true
      } else {
        this.doDrawing = true
        canvas.selection = false // 画板不显示选中
      }
    },
    toImage () {
      this.dataURL = canvas.toDataURL({
        format: 'png', // jpeg或png
        quality: 1, // 图片质量，仅jpeg时可用
        left: 5,
        top: 5,
        height: 891,
        width: 630
      })
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
    width: 600px; /*no*/
    margin: 20px;
    .btn {
      padding: 10px 20px;
      border-radius: 4px;
      border: 1px solid cadetblue; /*no*/
      font-size: 28px;/*px*/
    }
  }
  #canvas {
    border: 1px solid #ccc; /*no*/
  }
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
