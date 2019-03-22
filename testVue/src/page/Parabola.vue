<template>
  <div>
    <div class="add" @click="add($event)">+</div>
    <div class="add1" @click="add($event)">+1</div>
    <div class="shopcart" ref="shopcart">shopcart</div>
  </div>
</template>

<script>
import {Parabola} from '@/assets/Parabola.js'
export default {
  name: 'Parabola1',
  methods: {
    add (e) {
      let ball = document.createElement('div')
      ball.classList.add('ball')
      ball.style.top = (e.clientY - 10) + 'px'
      ball.style.left = (e.clientX - 10) + 'px'
      e.target.appendChild(ball)
      let parabola = new Parabola({
        el: ball,
        curvature: 0.7,
        direction: 'down',
        speed: 10,
        origin: {
          x: e.clientX - 8,
          y: e.clientY - 8
        },
        target: {
          x: this.$refs.shopcart.getBoundingClientRect().left,
          y: this.$refs.shopcart.getBoundingClientRect().top
        },
        onMotionDone () {
          ball.remove()
          console.log('ok')
        }
      })
      parabola.start()
    }
  }
}
</script>

<style>
.add{
  width: 20px;
  height: 20px;
  background-color: brown;
  border-radius: 50%;
  position: fixed;
  top: 20px;
  left: 20px;
}
.add1{
  width: 20px;
  height: 20px;
  background-color: brown;
  border-radius: 50%;
  float: right;
  position: relative;
  right: 20px;
  top: 20px;
}
.shopcart{
  width: 40px;
  height: 40px;
  background-color: aqua;
  position: fixed;
  bottom: 20px;
  left: 20px;
}
.ball {
  position: fixed;
  width: 16px;
  height: 16px;
  background-color: red;
  border-radius: 50%;
  z-index: 3;
}
</style>
