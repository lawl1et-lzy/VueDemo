<template>
  <div class="box">
    index
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  mounted () {
    let $box = document.querySelector('.box')
    // let style = window.getComputedStyle($box)
    // let styleCon = window.getComputedStyle($box).content
    // let stylePseudoEltCon = window.getComputedStyle($box, '::before').content
    // console.log(styleCon) // normal
    // console.log(stylePseudoEltCon) // 123

    let style = $box.getBoundingClientRect()
    console.log(style)
  }
}
</script>

<style lang="scss" scoped>
.box{
  border: 1px solid black;/*no*/
  font-size: 13px; /*no*/
  color: red;
  margin: 740px 40px 30px 20px; /*no*/
  width: 100px; /*no*/
  height: 30px; /*no*/
  &::before{
    content: '123';
    width: 10px;/*no*/
    height: 10px;/*no*/
  }
}
</style>
