<template>
  <div class="wrap">
    ComA
    <slot name="pinfo" :info="data">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ComA',
  data () {
    return {
      data: {
        sex: 'man',
        phone: {
          system: 'IOS',
          price: 123,
          color: 'white'
        },
        age: '25'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  border: 1px solid black;
}
</style>
