<template>
  <div class="box">
    <div class="draggable">
      <div class="head" @click="headClick">head</div>
      <div class="body" @click="bodyClick">body</div>
      <div class="foot" @click="footClick">foot</div>
    </div>
  </div>
</template>

<script>
import './jquery-ui.min'
import $ from 'jquery'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  mounted () {
    $('.draggable').draggable({ containment: '.box', handle: '.head' })
  },
  methods: {
    headClick () {
      console.log('headClick')
    },
    bodyClick () {
      console.log('bodyClick')
    },
    footClick () {
      console.log('footClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  height: 100%;
  width: 100%;
  background-color: lemonchiffon;
  padding: 100px;
  .draggable {
    width: 400px;
    height: 400px;
    border: 2px solid black; /*no*/
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    transform: translate3d(0, 0, 1px);
    will-change: transform;
    .head {
      height: 100px;
      background-color: lightblue;
    }
    .body {
      flex-grow: 1;
      background-color: lightsalmon;
    }
    .foot {
      height: 100px;
      background-color: lightblue;
    }
  }
}
</style>
