<template>
  <div>
    <div class='wrapper'>
      <div v-for="(item, index) in arr" :key="index">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transform3D',
  computed: {
    arr () {
      let arr = []
      let i = 0
      for (i = 0; i < 10; i++) {
        arr.push(i)
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
