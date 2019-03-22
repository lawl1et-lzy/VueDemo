<template>
  <div style="height: 2000px;">
    <div class="point">
      <div>
        touchstart
        <p>x:{{startX}}</p>
        <p>y:{{startY}}</p>
      </div>
      <div>
        touchmove
        <p>x:{{moveX}}</p>
        <p>y:{{moveY}}</p>
      </div>
      <div>
        touchend
        <p>x:{{endX}}</p>
        <p>y:{{endY}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TouchEvent',
  data () {
    return {
      startX: 0,
      startY: 0,
      moveX: 0,
      moveY: 0,
      endX: 0,
      endY: 0
    }
  },
  created () {
    window.addEventListener('touchstart', (event) => {
      this.startX = event.touches[0].clientX
      this.startY = event.touches[0].clientY
    })
    window.addEventListener('touchmove', (event) => {
      // event.preventDefault()
      this.moveX = event.touches[0].clientX
      this.moveY = event.touches[0].clientY
    })
    window.addEventListener('touchend', (event) => {
      this.endX = this.moveX
      this.endY = this.moveY
    })
  }
}
</script>

<style scoped>
.point{
  position: fixed;
  top: 0;
}
</style>
