<template>
  <div>
    <!-- 是否见过老师 -->
    <have-seen :list="haveSeenList"></have-seen>
    <!-- star -->
    <score-star :list="scoreStarList"></score-star>
  </div>
</template>

<script>
import MockData from '@/assets/js/scoreMock.js'
// components
import HaveSeen from './components/HaveSeen'
import ScoreStar from './components/ScoreStar'
export default {
  name: 'Score',
  data () {
    return {
      list: MockData.dimensionality_list
    }
  },
  computed: {
    haveSeenList () {
      return this.list.slice(0, 1)
    },
    scoreStarList () {
      return this.list.slice(1)
    }
  },
  components: {
    HaveSeen,
    ScoreStar
  }
}
</script>

<style scoped>

</style>
