<template>
  <div >
    {{message}}
    <button @click="lifeCircleShow">toggle</button>
    <button @click="changeOptions">changeOptions</button>
    <life-circle :options="options" v-if="show" ref="life"></life-circle>

    <button @click="goToBook">go to book</button>
    <div class="img"></div>
    <p>----------------------------</p>
    <img src="../../static/images/logo.png" alt="">
  </div>
</template>

<script>
import LifeCircle from '@/components/LifeCircle'
export default {
  name: 'Index',
  data () {
    return {
      message: 'lawliet',
      options: {
        name: 'lawliet'
      },
      show: true
    }
  },
  components: {
    LifeCircle
  },
  methods: {
    changeOptions () {
      // this.options.name = 'niya'
      console.log('this.$refs.life', this.$refs.life.options)
    },
    lifeCircleShow () {
      this.show = !this.show
    },
    goToBook () {
      this.$router.push('/book?name=lawliet&age=25')
    }
  }
}
</script>

<style scoped>
.img{
  width: 50px;
  height: 50px;
  /* background: url('../../static/images/logo.png') no-repeat center center; */
  background-size: 100% 100%;
}
</style>
