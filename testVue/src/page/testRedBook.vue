<template>
  <div id="box">
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'book',
  mounted () {
    let elem = document.getElementsByTagName('input')[0]
    elem.addEventListener('keyup', function (event) {
      console.log(event.keyCode)
    })
  },
  methods: {
  }
}
</script>

<style scoped>
#box{
  height: 1000px;
}
input{
  width: 100px;
  display: inline-block;
  border: 1px solid red;
}
</style>
