<template>
  <div class="container">
    <div class="nav">nav</div>
    <div class="content">
      <div class="content-header">content-header</div>
      <div class="iframe-contanier">
        <iframe src="http://localhost:8081/pageb" frameborder="0" ref="iframe"></iframe>
      </div>
      <div class="content-footer">content-footer</div>
    </div>
    <!-- <router-link to="/pageb">go to pageb</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'PageA',
  methods: {
    postMessageA (data) {
      console.log('PageA', data)
    }
  },
  mounted () {
    // this.$refs.iframe.contentWindow.onload = () => {
    //   this.$refs.iframe.contentWindow.postMessage(JSON.stringify({data: 'hahaha'}), '*')
    // }

    // window.addEventListener('message', this.postMessage, false)
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 90px 0;
  background-color: cornflowerblue;
  display: flex;
  .nav {
    width: 100px;
    flex-shrink: 0;
    background-color: darkcyan;
  }
  .content {
    flex-grow: 1;
    background-color: darkkhaki;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 90px 0 ;
    .iframe-contanier {
      width: 100%;
      height: 100%;
    }
    .content-header {
      position: absolute;
      top: 0;
      width: 100%;
      height: 90px;
      background-color: darksalmon;
    }
    .content-footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 90px;
      background-color: darksalmon;
    }
  }
  iframe {
    height: 100%;
    width: 100%;
    background-color: cornsilk;
  }
}
</style>
