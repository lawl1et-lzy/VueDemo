<template>
  <div class="wrap">
    <div class="btn-group">
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { fabric } from 'fabric'
let canvas = null
// const canvasCursor = require('../../images/icon/icon-canvas-cursor.png')
export default {
  name: 'FabricDemo',
  mounted () {
    canvas = new fabric.Canvas('canvas', {
      width: 600,
      height: 600,
      // selectable: true,
      selection: true
      // isDrawingMode: true
    })
    canvas.on({
      'mouse:down': e => {
        console.log('mouse:down', e.pointer)
      },
      'mouse:move': e => {
      },
      'mouse:up': e => {
        console.log('mouse:up', e.pointer)
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
      },
      'path:created': e => {
        console.log('path:created', e)
      }
    })
    var textbox = new fabric.Textbox('This is a Textbox object', {
      left: 20,
      top: 50,
      fill: '#880E4F',
      strokeWidth: 2,
      stroke: '#D81B60'
    })
    canvas.add(textbox)
    // var rect = new fabric.Rect({
    //   left: 100,
    //   top: 100,
    //   fill: 'red',
    //   width: 100,
    //   height: 100
    // })
    // canvas.add(rect)

    // var triangle = new fabric.Triangle({
    //   width: 20,
    //   height: 30,
    //   fill: 'blue',
    //   left: 100,
    //   top: 100,
    //   globalCompositeOperation: 'destination-out'
    // })
    // rect.set('fill', 'red')
    // rect.set({ strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' })
    // rect.set('angle', 15).set('flipY', true)
    // canvas.isDrawingMode = true
    // let img = new Image()
    // img.onload = () => {
    //   let imgF = new fabric.Image(img, {
    //     top: 100,
    //     left: 100
    //   })
    //   canvas.add(imgF)
    // }
    // img.src = require('../../images/icon/icon-canvas-cursor.png')
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
  // img {
  //   width: 10px;/*no*/
  //   height: 10px;/*no*/
  // }
}
</style>
