<template>
  <div class="heart-wrapper">
    <div class="img-star" :class="{'heart-beat': heartBeat}">
      <img :src="require('@/images/star.png')" alt="星星">
    </div>
    <button @click="handleClick">button</button>
  </div>
</template>

<script>
export default {
  name: 'Heart',
  data () {
    return {
      heartBeat: false
    }
  },
  methods: {
    handleClick () {
      this.heartBeat = !this.heartBeat
    }
  }
}
</script>

<style lang="scss" scoped>
.heart-wrapper{
  padding: 20px;
}
.img-star{
  width: 100px;
  height: 100px;
  overflow: hidden;
}
@keyframes heartAnimate {
  0%,100% {
    transform: scale(1);
  }
  10%, 90%{
    transform: scale(1.05);
  }
  20%, 80%{
    transform: scale(1.1);
  }
  30%, 70%{
    transform: scale(1.15);
  }
  40%, 60%{
    transform: scale(1.2);
  }
  50%{
    transform: scale(1.25);
  }
}
.heart-beat{
  animation: heartAnimate 1s ease infinite;
}
</style>
