<template>
  <div>
    <router-link :to="{path: 'pagea'}" exact>pagea</router-link>
    <router-link :to="{path: 'pageb'}" exact>pageb</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TestVue'
}
</script>

<style scoped>
.router-link-active{
  color: red;
}
</style>
