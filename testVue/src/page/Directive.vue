<template>
  <div class="nav">
    <div class="item" v-hover="'images'">images</div>
    <div class="item" v-hover="'article'">article</div>
    <div class="item" v-hover="'music'">music</div>
  </div>
</template>

<script>
export default {
  name: 'vdirective',
  data () {
    return {
      message: 'lawliet'
    }
  },
  directives: {
    hover: {
      bind (el, binding, vnode) {
        el.addEventListener('mouseover', (e) => {
          console.log(binding.value)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav{
  .item{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
    border: 1px solid black;
  }
}
</style>
