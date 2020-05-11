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
    </div>
    <div class="canvas-wrap">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import { fabric } from 'fabric'
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
      color: '#ccc', // 画笔颜色
      drawingObject: null, // 当前绘制对象
      moveCount: 1, // 绘制移动计数器
      doDrawing: false // 绘制状态
    }
  },
  mounted () {
    this.canvas = new fabric.Canvas('canvas', {
      width: 600,
      height: 600,
      skipTargetFind: true, // 整个画板不能被选中
      isDrawingMode: false, // 自由绘图
      selectable: false, // 控件不能被选择，不会被操作
      selection: false // 画板显示选中
    })
    this.canvas.freeDrawingBrush.color = this.color // 设置自由绘颜色
    this.canvas.freeDrawingBrush.width = this.drawWidth
    this.canvas.on({
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
        this.canvas.remove(this.drawingObject)
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
        this.canvas.add(canvasObject) // .setActiveObject(canvasObject)
        this.drawingObject = canvasObject
      }
    },
    toolClick (drawType) {
      this.drawType = drawType
      if (drawType === 'pen') {
        this.canvas.isDrawingMode = true
      } else if (drawType === 'remove') {
        this.canvas.selection = true
        this.canvas.selectable = true
      } else {
        this.doDrawing = true
        this.canvas.selection = false // 画板不显示选中
        this.canvas.selectable = false // 画板不显示选中
      }
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
  .canvas-wrap {
    position: relative;
    width: 600px; /*no*/
    height: 600px; /*no*/
    .canvas-container {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .img-wrap{
      background-color: red;
      width: 100%;
      height: 100%;
    }
  }
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
