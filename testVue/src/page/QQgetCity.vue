<template>
  <div>
    <p v-for="(item, index) in cities" :key="index">
      {{item}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'QQgetCity',
  data () {
    return {
      cities: []
    }
  },
  methods: {
    getCity () {
      let url = 'http://cdn-api-tst.changingedu.com/svc/api/cpb/v4/config/citys.json'
      this.$axios.get(url)
        .then(res => {
          this.handerCity(res.data.cities)
        })
    },
    handerCity (cities) {
      // https://m.changingedu.com/beijing
      // https://m.changingedu.com/beijing/
      // const baseUrl = 'https://m.changingedu.com/'
      cities.forEach(item => {
        let cityname = item.city_pinyin.split(';').join('')
        // this.cities.push([baseUrl, cityname].join(''))
        // this.cities.push([baseUrl, cityname, '/'].join(''))

        // this.cities.push(['/', cityname].join(''))
        this.cities.push(['/', cityname, '/'].join(''))
      })
    }
  },
  created () {
    this.getCity()
  }
}
</script>

<style scoped>

</style>
