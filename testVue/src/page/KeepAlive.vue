<template>
  <div>
    <!-- <router-link to="/keepalive/pagea">pagea</router-link>
    <router-link to="/keepalive/pageb">pageb</router-link> -->

    <button @click="componentId = 'ComA'">ComA</button>
    <button @click="componentId = 'ComB'">ComB</button>

    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import ComA from '@/components/ComA'
import ComB from '@/components/ComB'
export default {
  name: 'TestKeepAlive', // 这个name 不能命名成keepAlive，不然会报错
  data () {
    return {
      componentId: 'ComA'
    }
  },
  components: {
    ComA,
    ComB
  }
}
</script>

<style lang="scss" scoped>

</style>
