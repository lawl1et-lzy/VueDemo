<template>
  <div class="wrap">
    parent
    <com-a>
      <template slot='pinfo'>
        extra text from parent
      </template>
    </com-a>
  </div>
</template>

<script>
const ComA = () => import('./components/ComA')
export default {
  name: 'TestSlot',
  data () {
    return {
    }
  },
  components: {
    ComA
  }
}
</script>

<style lang="scss" scoped>

</style>
