<template>
  <div class="container">
    <div class="border border-1">0.5px</div>
    <div class="border border-2">1px</div>
    <div class="border border-3">1px</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  },
  created () {
    function resize () {
      var deviceWidth = document.documentElement.clientWidth
      document.documentElement.style.fontSize = (deviceWidth / 10) + 'px'
    }
    resize()
    window.onresize = resize
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@function px2rem($px) {
  @return #{$px/750*10}rem;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .border {
    width: px2rem(200);
    // width: 26.6vw;
    margin-top: 20px;
    padding: 20px;
    font-size: px2rem(36);
    position: relative;
  }
  .border-1 {
    border: 0.5px solid red;
  }
  .border-2 {
    border: 1px solid red;
  }
  .border-3 {
    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid red;
      // border-radius: 26px;
      width: 200%;
      height: 200%;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: left top;
      transform-origin: left top;
    }
  }
}
</style>
