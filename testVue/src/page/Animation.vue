<template>
  <div>
    <button @click="()=> this.popupVisible = true">click</button>
    <popup v-model="popupVisible"></popup>
  </div>
</template>

<script>
import Popup from '@/components/Popup'
export default {
  name: 'Animation',
  components: {
    Popup
  },
  data () {
    return {
      popupVisible: false
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
