<template>
  <div>
    {{ con || content }}
  </div>
</template>

<script>
export default {
  name: 'ComA',
  props: {
    content: {
      type: String
    }
  },
  data () {
    return {
      cont: ''
    }
  },
  computed: {
    con () {
      return this.cont
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
