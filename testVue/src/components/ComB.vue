<template>
  <div>
    {{message}}
    {{options}}
  </div>
</template>

<script>
export default {
  name: 'ComB',
  props: ['options'],
  data () {
    return {
      message: 'ComB'
    }
  }
}
</script>

<style scoped>

</style>
