<template>
  <div>
    <ul class="over">
      <li>mouseover</li>
    </ul>

    <hr>

    <ul class="enter">
      <li>mouseenter</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Border',
  methods: {

  },
  created () {
    setTimeout(() => {
      console.log('a')
      setTimeout(() => {
        console.log('b')
      }, 4000)
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
ul{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  margin: 40px;
  li{
    border: 1px soid red;
  }
}
</style>
