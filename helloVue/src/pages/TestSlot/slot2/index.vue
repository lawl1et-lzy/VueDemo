<template>
  <div class="wrap">
    parent
    <com-a>
      <template slot-scope="data">
        {{ data.info.sex }}
        <div>
          {{ data.info.phone.system }}
        </div>
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
