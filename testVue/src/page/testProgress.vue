<template>
  <div>
    <div class="progress">
      <div class="progress-bar progress-bar-striped" :class="{active: isActive}" :style="{width: width + '%'}"></div>
    </div>
    <button @click="changeRate">changeRate</button>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data () {
    return {
      isActive: false,
      width: 0
    }
  },
  methods: {
    changeRate () {
      this.isActive = true
      this.width = 60
    }
  }
}
</script>

<style scoped>
.progress{
  height: 20px;
  margin: 10px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
}
.progress-bar{
  float: left;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
  width: 0;
  transition: width .6s ease;
}
.progress-bar.active {
  animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-striped{
  background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
  background-size: 40px 40px;
}
@keyframes progress-bar-stripes {
  from  { background-position: 0px 0; }
  to    { background-position: 40px 0; }
}
</style>
