<template>
  <div>
    <!-- 是否见过老师 -->
    <have-seen :list="haveSeenList"></have-seen>
    <!-- star -->
    <Header :list="scoreStarList"></Header>
  </div>
</template>

<script>
import MockData from '@/js/scoreMock.js'
// components
import HaveSeen from './components/HaveSeen'
import Header from './components/ScoreStar'
export default {
  name: 'Score',
  data () {
    return {
      list: MockData.dimensionality_list
    }
  },
  computed: {
    haveSeenList () {
      return this.list[0]
    },
    scoreStarList () {
      return this.list.slice(1)
    }
  },
  components: {
    HaveSeen,
    Header
  }
}
</script>

<style scoped>

</style>
