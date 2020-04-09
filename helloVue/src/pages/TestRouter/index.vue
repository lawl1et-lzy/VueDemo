<template>
  <div>
    <div class="prev" @click="prev">prev</div>
    <div class="next" @click="next">next</div>
  </div>
</template>

<script>
export default {
  name: 'TestRouter',
  created () {
    console.log(this.$route)
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  watch: {
    $route: {
      handler (n, o) {
        console.log('$route')
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    next () {
      const query = this.$route.query
      query.pagesize = Number(query.pagesize) + 1
      console.log(this.$route)
      this.$router.push({
        name: 'Index',
        query: {
          pagesize: this.$route.query.pagesize + 1
        }
      })
    },
    prev () {
      const query = this.$route.query
      query.pagesize = Number(query.pagesize) - 1
      this.$router.push({
        name: 'Index',
        query
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
