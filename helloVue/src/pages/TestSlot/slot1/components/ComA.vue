<template>
  <div class="wrap">
    i am from ComA
    <br />
    <slot name="pinfo">
      ComA Slot
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ComA',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  border: 1px solid black;
}
</style>
