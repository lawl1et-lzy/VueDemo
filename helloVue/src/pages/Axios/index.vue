<template>
  <div>
    Axios
  </div>
</template>

<script>
export default {
  name: 'TestAxios',
  mounted () {
    this.fetchCityList()
  },
  methods: {
    fetchCityList () {
      console.log(this.HOST)
      let url = `${this.HOST}/signUp`
      this.$axios.post(url, {
        'username': 'lawliet',
        'password': '123123'
      })
        .then(res => {
          console.log(res)
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
