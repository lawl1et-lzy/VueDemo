<template>
  <div>
    shuffle
  </div>
</template>

<script>
export default {
  name: 'testShuffle',
  methods: {
    shuffle (arr) {
      arr.sort(() => {
        return Math.random() - 0.5
      })
    },
    shuffle2 (arr) {
      let i = arr.length
      while (i) {
        let j = Math.floor(Math.random() * i--); // 执行完这句代码后， i - 1
        [arr[i], arr[j]] = [arr[j], arr[i]]
        console.log(i)
      }
    }
  },
  mounted () {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    this.shuffle2(arr)
    console.log(arr)
  }
}
</script>

<style scoped>

</style>
