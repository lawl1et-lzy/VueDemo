<template>
  <div class="container">
    <div class="btn-group">
      <button class="btn" @click="sendMessage()">click</button>
    </div>
    <div class="content">
      <div class="iframe-contanier">
        <iframe src="http://localhost:8080/fabric" frameborder="0" ref="iframe" @load="iframeLoad"></iframe>
      </div>
    </div>
    <!-- <PageB v-show="true"></PageB> -->
  </div>
</template>

<script>
import datas from '../../js/test'
import PageB from './PageB'
export default {
  name: 'PageA',
  data () {
    return {
      i: 0,
      timer: null
    }
  },
  components: {
    PageB
  },
  created () {
    console.log('iframe created')
  },
  mounted () {
    console.log('iframe mounted')
    // window.addEventListener('message', this.postMessage, false)

    // window.top.postMessage('i am from child', '*')
  },
  methods: {
    sendMessage () {
      this.timer = setInterval(() => {
        const data = datas[this.i]
        if (data) {
          this.$refs.iframe.contentWindow.postMessage(JSON.stringify({data: data}), '*')
          this.i++
        } else {
          clearInterval(this.timer)
          this.i = 0
        }
      }, 300)
    },
    iframeLoad () {
      window.addEventListener(
        'message',
        (e) => {
          console.log('tablet parent', e.data)
          const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
          const { data: type } = data
          switch (type) {
            case 'homework:tablet:openPenTouchPoint':
              this.sendMessage()
              break
            case 'homework:tablet:closePenTouchPoint':
              clearInterval(this.timer)
              break
          }
        },
        false
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 90px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .btn-group {
    width: 600px; /*no*/
    margin: 20px;
    .btn {
      padding: 10px 20px;
      border-radius: 4px;
      border: 1px solid cadetblue; /*no*/
      font-size: 28px;/*px*/
    }
  }
  iframe {
    width: 900px; /*no*/
    height: 680px; /*no*/
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cornsilk;
    border: 2px solid hotpink;
  }
}
</style>
