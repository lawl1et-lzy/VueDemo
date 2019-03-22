<template>
  <div>
    <p>name: {{ value.name }}</p>
    <p>age: {{ value.age }}</p>
    <p>phone: {{ value.phone || '' }}</p>
    phone: <input type="text" v-model="value.phone">
    <br />
  </div>
</template>

<script>

export default {
  name: 'VModelCom',
  props: ['value'],
  watch: {
    value: {
      handler (n, o) {
        this.$emit('input', n)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped>
input{
  border: 1px solid black
}
</style>
