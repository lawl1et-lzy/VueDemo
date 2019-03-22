<template>
  <div style="height: 100%;">
    <canvas id="canvas" style="border:solid black 1px;">
      Your browser does not support canvas element.
    </canvas>
    <div style="display:none">{{msg}}</div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Flow',
  data () {
    return {
      canvas: '',
      ctx: '',
      lineWidth: 10,
    }
  },
  computed: {
    ...mapState({
      msg: (state) => {
        return state.data
      }
    })
  },
  watch: {
    '$store.state.data':{
       handler (o, n){
        
        this.handle_direct_line(n)
      },
      deep: true
    } 
  },
  methods: {
    ...mapMutations(['fetchData']),
    // 直线
    handle_direct_line ({ point1, point2, lineWidth, strokeStyle }) {
      if (point1.x > 891 || point2.x > 891 || point1.y > 630 || point2.y > 630) {
        return false
      }
      if (point1.x === point2.x && point1.y === point2.y) {
        return false
      }
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.moveTo(this.handle_radio(point1.x), this.handle_radio(point1.y))
      this.ctx.lineWidth = this.handle_radio(lineWidth)
      this.ctx.strokeStyle = strokeStyle
      this.ctx.lineTo(this.handle_radio(point2.x), this.handle_radio(point2.y))
      this.ctx.closePath()
      this.ctx.stroke()
      this.ctx.restore()
    },
    handle_radio (number) {
      return number * 1
    },
  },
  mounted () {
    let canvas = (this.canvas = document.querySelector('#canvas'))
    let ctx = (this.ctx = canvas.getContext('2d'))
    canvas.width = document.body.clientWidth -2
    canvas.height = document.body.clientHeight -2
    this.fetchData('2000')
  },
}
</script>

<style scoped>
</style>
