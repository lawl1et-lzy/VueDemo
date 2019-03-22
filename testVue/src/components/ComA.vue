<template>
  <div class="pagea">
    <div class="sub">
      sub123
    </div>
    {{message}}
    {{options}}
  </div>
</template>

<script>
export default {
  name: 'ComA',
  props: ['options'],
  data () {
    return {
      message: 'ComA'
    }
  }
}
</script>

<style scoped>

</style>
