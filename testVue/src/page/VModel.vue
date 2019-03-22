<template>
  <div>
    <v-model-com
      v-model="info">
    </v-model-com>
  </div>
</template>

<script>
import VModelCom from '@/components/VModelCom'
export default {
  name: 'VModel',
  data () {
    return {
      info: {
        name: 'niya',
        age: 25,
        phone: 13333333
      }
    }
  },
  components: {
    VModelCom
  }
}
</script>

<style scoped>

</style>
