<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/style/base.scss';
#app{
  width: 100%;
  height: 100%;
}
</style>
