<template>
  <div style="height: 100%;">
    <!-- <button @click="fixed">fixed</button>
      <button @click="scroll">scroll</button>
      <vue-scroll @scrollObj="scrollObj">
        <ul>
          <li v-for="(item, index) in [1,2,3,4,5]" :key="index">
            hhahh<br /><br /><br />
            hhahh<br /><br /><br />
            hhahh<br /><br /><br />
            hhahh<br /><br /><br />
            hhahh<br /><br /><br />
          </li>
        </ul>
      </vue-scroll> -->
    <vue-scroll
      :bounce="false"
      :listenScroll="true"
      @scrollObj="handleWrapScrollObj"
      @scroll="handleWrapScroll"
      >
      <div class="scroll-wrapper">
        <div class="horizontal">
          horizontal
        </div>
        <div class="content" ref="content">
          <vue-scroll
            @scrollObj="handleNavScrollObj"
            :listenScroll="true"
            :bounce="false"
            @scroll="handleNavScroll"
            style="width: 30%;">
            <div class="left">
              <li v-for="(item, index) in [1,2,3,4,5]" :key="index" @click="navClick(index, $event)" style="height: 50px;">
                left
              </li>
            </div>
          </vue-scroll>

          <vue-scroll
            @scrollObj="hangleGoodsScrollObj"
            :bounce="false"
            :listenScroll="true"
            @scroll="handleGoodsScroll"
            style="width: 70%;">
            <div class="right" ref="rightContnet">
              <li v-for="(item, index) in [1,2,3,4,5]" :key="index" class="goodsitem">
                right<br /><br /><br /><br /> right1
                <br /><br /><br /><br /> right
                <br /><br /><br /><br /> right
                <br /><br /><br /><br /> right
                <br /><br /><br /><br />right
              </li>
            </div>
          </vue-scroll>
        </div>
      </div>
    </vue-scroll>

  </div>
</template>

<script>
import VueScroll from '@/components/VueScroll'
export default {
  name: 'Bscroll',
  data () {
    return {
      wrapScrollObj: '',
      navScrollObj: '',
      goodsScrollObj: ''
    }
  },
  components: {
    VueScroll
  },
  methods: {
    navClick (index, event) {
      let goodsList = this.$refs.rightContnet.getElementsByClassName('goodsitem')
      let elem = goodsList[index]
      this.goodsScrollObj.scrollToElement(elem, 300)
    },
    handleWrapScrollObj (val) {
      this.wrapScrollObj = val
    },
    handleNavScrollObj (val) {
      this.navScrollObj = val
      this.navScrollObj.disable()
    },
    hangleGoodsScrollObj (val) {
      this.goodsScrollObj = val
      this.goodsScrollObj.disable()
    },
    handleWrapScroll (pos) {
      if (Math.abs(pos.y) >= 190) {
        this.navScrollObj.enable()
        this.goodsScrollObj.enable()
        // this.wrapScrollObj.disable()
        console.log('nav good enable, wrap disable')
      } else {
        this.navScrollObj.disable()
        this.goodsScrollObj.disable()
        // this.wrapScrollObj.enable()
        console.log('nav good disable, wrap enable')
      }
    },
    handleNavScroll (pos) {
      console.log(pos.y)
      if (Math.abs(pos.y) === 0) {
        this.wrapScrollObj.enable()
      }
      if (Math.abs(pos.y) > 10) {
        this.wrapScrollObj.disable()
      }
    },
    handleGoodsScroll (pos) {
      console.log('handleGoodsScroll')
      if (Math.abs(pos.y) === 0) {
        this.wrapScrollObj.enable()
      }
      if (Math.abs(pos.y) > 10) {
        this.wrapScrollObj.disable()
      }
    },
    refresh () {
      this.navScrollObj.refresh()
      this.goodsScrollObj.refresh()
      this.wrapScrollObj.refresh()
    }
  },
  mounted () {
    let bodyHeight = document.getElementsByTagName('body')[0].getBoundingClientRect().height || 0
    this.$refs.content.style.height = bodyHeight + 'px'

    console.log(window.getComputedStyle(this.$refs.content, null).margin)
  }
}
</script>

<style scoped>
  /* .scroll-wrapper{
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    height: 100%;
  } */

  .horizontal,
  .content,
  .left,
  .right {
    border: 1px solid #ccc;
  }

  .horizontal {
    width: 100%;
    height: 200px;
    background-color: bisque;
  }

  .content {
    display: flex;
    height: 650px;
    overflow: hidden;
  }

  .left,
  .right {
    overflow: scroll;
  }
</style>
