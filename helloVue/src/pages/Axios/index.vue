<template>
  <div>
    Axios
    {{ res }}
    <p>----------------------------</p>
    <div v-html="res"></div>
  </div>
</template>

<script>
export default {
  name: 'TestAxios',
  data () {
    return {
      res: ''
    }
  },
  mounted () {
    this.fetchCityList()
  },
  methods: {
    fetchCityList () {
      console.log(this.HOST)
      let url = `${this.HOST}/signUp`
      this.$axios.post(url, {
        'username': 'lawliet8',
        'password': '123123'
      })
        .then(res => {
          console.log(res)
          this.res = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
