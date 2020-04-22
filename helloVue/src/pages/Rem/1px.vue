<template>
  <div class="container">
    <div class="border border-top" @click="handleBorderTop">单条 top</div>
    <div class="border border-right" @click="handleBorderRight">单条 right</div>
    <div class="border border-bottom" @click="handleBorderBottom">单条 bottom</div>
    <div class="border border-left" @click="handleBorderLeft">单条 left</div>
    <div class="border border-all" @click="handleBorderAll">Border All</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  },
  created () {
  },
  methods: {
    handleBorderTop () {
      console.log('handleBorderTop')
    },
    handleBorderRight () {
      console.log('handleBorderRight')
    },
    handleBorderBottom () {
      console.log('handleBorderBottom')
    },
    handleBorderLeft () {
      console.log('handleBorderLeft')
    },
    handleBorderAll () {
      console.log('handleBorderAll')
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin border(
  $borderWidth: 1px,
  $borderColor: #333,
  $borderTopWidth: 0,
  $borderRightWidth: 0,
  $borderBottomWidth: 0,
  $borderLeftWidth: 0,
  $borderRadius: 0,
  $borderStyle: solid,
  ) {
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: $borderWidth $borderStyle $borderColor;
    border-radius: $borderRadius;
    border-top-width: $borderTopWidth;
    border-right-width: $borderRightWidth;
    border-bottom-width: $borderBottomWidth;
    border-left-width: $borderLeftWidth;
    transform-origin: 0 0;
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    &::after {
      width: 100% * 2;
      height: 100% * 2;
      transform: scale(0.5);
    }
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    &::after {
      width: 100% * 3;
      height: 100% * 3;
      transform: scale(0.33);
    }
  }
}

@mixin borderAll($borderWidth, $borderColor, $borderRadius: 0) {
  @include border($borderWidth, $borderColor, 1px, 1px, 1px, 1px, $borderRadius)
}

@mixin borderTop($borderWidth, $borderColor) {
  @include border($borderWidth, $borderColor, 1px)
}

@mixin borderLeft($borderWidth, $borderColor) {
  @include border($borderWidth, $borderColor, 0, 0, 0, 1px)
}

@mixin borderRight($borderWidth, $borderColor) {
  @include border($borderWidth, $borderColor, 0, 1px, 0, 0)
}

@mixin borderBottom($borderWidth, $borderColor) {
  @include border($borderWidth, $borderColor, 0, 0, 1px, 0)
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .border {
    width: 200px;
    margin-top: 20px;
    padding: 20px;
    font-size: 12px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .border-top {
    @include borderTop(1px,black)
  }
  .border-right {
    @include borderRight(1px,black)
  }
  .border-bottom {
    @include borderBottom(1px,black)
  }
  .border-left {
    @include borderLeft(1px,black)
  }
  .border-all {
    @include borderAll(1px,black, 20px)
  }
}

</style>
