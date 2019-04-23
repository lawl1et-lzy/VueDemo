<template>
  <div class="wrapper" id="shopping-car">
  </div>
</template>

<script>
export default {
  name: 'ShoppingCar'
}
</script>

<style lang="scss" scoped>
.wrapper{
  position: fixed;
  bottom: 40px;
  left: 40px; /*no*/
  width: 90px;
  height: 90px;
  background: url('~@/images/star.png') no-repeat;
  background-size: 100%;
  animation: star .5s ease-in-out;
}
@keyframes star{
  0%, 100% {
    transform: scale(1)
  }
  25%, 75% {
    transform: scale(1.2)
  }
  50%{
    transform: scale(1.5)
  }
}
</style>
