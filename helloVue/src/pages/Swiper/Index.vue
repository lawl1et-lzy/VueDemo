<template>
  <div class="swiper-container gallery-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        1
      </div>
      <div class="swiper-slide">
        2
      </div>
      <div class="swiper-slide">
        3
      </div>
      <div class="swiper-slide">
        4
      </div>
      <div class="swiper-slide">
        5
      </div>
    </div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
/* eslint-disable */
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'TestSwiper',
  mounted () {
    const swiperClass = new Swiper('.gallery-container', {
      // slidesPerview: 1,
      // loop: true,
      scrollbar: '.swiper-scrollbar',
      freeMode : true,
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container{
  width: 100%;
  overflow: hidden;
  .swiper-scrollbar{
    width: 100px;
  }
  .swiper-wrapper{
    width: 100%;
    .swiper-slide{
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: antiquewhite;
    }
  }
}
  
</style>
