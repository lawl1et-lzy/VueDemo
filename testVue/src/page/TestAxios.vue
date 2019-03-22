<template>
  <div>
    <com-a :options="options"></com-a>
  </div>
</template>

<script>
import ComA from '@/components/ComA'
export default {
  name: 'TestAxios',
  data () {
    return {
      options: {}
    }
  },
  components: {
    ComA
  },
  mounted () {
    setTimeout(() => {
      this.options = 'lawliet'
    }, 2000)
    // this.$axios.get('../../static/data.json').then(res => {
    //   this.options = res.data
    // })
  }
}
</script>

<style scoped>

</style>
