<template>
  <div class="toast" v-if="showToast">
    <div class="toast-main">
      <div class="toast-icon" :class="iconClass"></div>
      <!-- <div class="toast-icon icon-spinner3"></div> -->
      <div class="toast-cont">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    // 显示文案
    message: {
      type: String
    },
    // 持续时间
    duration: {
      type: Number,
      default: 1000
    },
    // 图标名称
    iconClass: {
      type: String
    }
  },
  watch: {
    duration: 'handleWatchDuration'
  },
  data () {
    return {
      showToast: true // 是否显示 toast
    }
  },
  computed: {
    a () {
      return this.iconClass
    }
  },
  methods: {
    handleWatchDuration (n, o) {
      setTimeout(() => {
        this.showToast = false
      }, n)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/font-styl.scss';
.toast{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  .toast-main{
    width: 200px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    .toast-cont{
      color: #fff;
    }
  }
}
</style>
