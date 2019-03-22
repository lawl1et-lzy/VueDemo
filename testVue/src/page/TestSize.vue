<template>
  <div class="container">
    <div class="box" ref="box">
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      有时候我们想基于 better-scroll 做一些扩展，需要对 better-scroll 的一些属性有所了解，下面介绍几个常用属性。<br />
      <button @click="handleClick($event)">button</button>
    </div>
    <!-- <div style="border: 1px solid red">
      .box{<br />
        &nbsp;&nbsp;padding: 10px; <br />
        &nbsp;&nbsp;height: 100px;<br />
        &nbsp;&nbsp;width: 100px;<br />
        &nbsp;&nbsp;margin: 5px;<br />
        &nbsp;&nbsp;border: 1px solid black;<br />
      }
    </div> -->
    <!-- msg -->
    <div ref="msg">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Size',
  methods: {
    handleClick (event) {
      console.log(event)
    }
  },
  mounted () {
    let boxElem = this.$refs.box
    /**
     * pc
     *  clientWidth = padding + width - 滚动条宽度
     *  offsetWidth = padding + width + border + 滚动条宽度
     * mobile
     *  clientWidth = padding + width
     *  offsetWidth = padding + width + border
     *
     * common
     *  clientTop = border-top 边框
     *
     */
    let clientWidth = boxElem.clientWidth
    let offsetWidth = boxElem.offsetWidth
    let clientTop = boxElem.clientTop
    let offsetTop = boxElem.offsetTop

    this.$refs.msg.innerHTML = `
      clientWidth: ${clientWidth} <br />
      offsetWidth: ${offsetWidth} <br />
      clientTop: ${clientTop} <br />
      offsetTop: ${offsetTop} <br />
    `

    console.log(window.getComputedStyle(boxElem, null).height)
  }
}
</script>

<style scoped>
.container{
  margin-top: 100px;
  padding: 50px;
  border: 10px solid rosybrown;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.box{
  padding: 10px;
  height: 200px;
  width: 200px;
  margin: 5px;
  border: 1px solid black;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
