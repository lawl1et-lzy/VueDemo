<template>
  <div class="swiper-container gallery-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
      >
        1
      </div>
      <div
        class="swiper-slide"
      >
        2
      </div>
      <div
        class="swiper-slide"
      >
        3
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
/* eslint-disable */
import '../../js/swiper'
export default {
  name: 'TestSwiper',
  mounted () {
    setTimeout(() => {
        const swiperClass = new Swiper('.gallery-container', {
      direction: 'horizontal',
      spaceBetween: 10,
      slidesPerView: 1.3,
      centeredSlides: true,
      loop: true
    })
    }, 2000);
    
    console.log(swiperClass)
  }
}
</script>

<style scoped>

</style>
