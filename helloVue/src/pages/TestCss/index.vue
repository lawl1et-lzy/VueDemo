<template>
  <div class="container">
    <!-- float -->
    <section class="float">
      <!-- html 结构的位置 -->
      <div class="box left">left</div>
      <div class="box right">right</div>
      <div class="box center">
        通过 float 解决
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
      </div>
    </section>
    <!-- position -->
    <section class="position">
      <div class="box left">left</div>
      <div class="box center">
        通过 position 解决
        <div class="extra">
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
        </div>
      </div>
      <div class="box right">right</div>
    </section>
    <!-- flex -->
    <section class="flex">
      <div class="box left">left</div>
      <div class="box center">
        通过 flex 解决
        <div class="extra">
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
        </div>
      </div>
      <div class="box right">right</div>
    </section>
    <!-- table -->
    <section class="table">
      <div class="box left">left</div>
      <div class="box center">
        通过 table 解决
        <div class="extra">
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
        </div>
      </div>
      <div class="box right">right</div>
    </section>
    <!-- grid -->
    <section class="grid">
      <div class="box left">left</div>
      <div class="box center">
        通过 grid 解决
        <div class="extra">
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
          <p>当高度不同的时候</p>
        </div>
      </div>
      <div class="box right">right</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  },
  components: {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
