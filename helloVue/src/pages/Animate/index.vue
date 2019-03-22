<template>
  <component :is="componentName"></component>
</template>

<script>
import Heart from './components/Heart'
import CountDown from './components/CountDown/CountDown'
import CountDown2 from './components/CountDown/CountDown2'
import CountDown3 from './components/CountDown/CountDown3'
import Transform3D from './components/transform3D/Transform3D'
export default {
  name: 'Index',
  data () {
    return {
      componentName: 'Transform3D'
    }
  },
  components: {
    Heart,
    CountDown,
    CountDown2,
    CountDown3,
    Transform3D
  }
}
</script>
