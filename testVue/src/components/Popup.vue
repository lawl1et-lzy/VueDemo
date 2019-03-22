<template>
  <div class="popup-prompt" @click="handlePrompt" v-show="value">
    <transition
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
      <div class="popup-widge" v-show="value">
        <!-- title -->
        <div class="popup-title">
          title
        </div>
        <!-- content -->
        <div class="popup-content">
          content
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: ['value'],
  methods: {
    handlePrompt () {
      this.$emit('input', !this.value)
    },
    enter (el, done) {
      el.classList.add('slide-enter-active')
      done()
    },
    leave (el, done) {
      el.classList.add('slide-leave-active')
      done()
    },
    afterEnter (el) {
    },
    afterLeave (el) {
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-prompt{
  position: absolute;
  top: 0;left: 0;right: 0;bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  .popup-widge{
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #fff;
    .popup-title, .popup-content{
      padding: 10px;
    }
    .popup-title{
      border: 1px solid #ccc;
    }
    .popup-content{
      min-height: 200px;
    }
  }
}
.slide-enter-active{
  animation: popup-slide-in 1s
}
.slide-leave-active{
  animation: popup-slide-out 1s
}
@keyframes popup-slide-in {
  0%{
    transform: translate3d(0, 100%, 0);
  }
  100%{
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popup-slide-out {
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(0, 100%, 0);
  }
}
</style>
