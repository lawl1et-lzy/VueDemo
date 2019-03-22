<template>
  <div class="wrap">
    <!-- 商品详情页 -->
    <h1>商品详情页</h1>
    <div class="goods">
      <div v-for="item in phone" :key="item.id" class="item">
        <p class="name">名称：{{ item.name }}</p>
        <p class="price">价格：{{ item.price }}</p>
        <div class="btn increase" @click="increaseItem(item)">+</div>
      </div>
    </div>
    <!-- 购物车 -->
    <h1>购物车</h1>
    <div class="shopping-car" v-if="Array.isArray(selected) && selected.length > 0">
      <div v-for="item in selected" :key="item.id" class="item">
        <p class="name">名称：{{ item.name }}</p>
        <p class="price">价格：{{ item.price }}</p>
        <div class="btn delete" @click="deleteItem(item)">-</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  name: 'Index',
  computed: {
    ...mapGetters(['phone']),
    ...mapState({
      goods: (state) => state.goods.data,
      selected: (state) => state.goods.selected
    })
  },
  methods: {
    ...mapActions(['increase', 'delete']),
    increaseItem (item) {
      this.increase(item)
    },
    deleteItem (item) {
      this.delete(item)
    }
  }
}
</script>

<style lang='scss' scoped>
.item{
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  margin: 10px 0;
  padding: 10px 0;
  .btn{
    display: flex;
    border: 1px solid #ccc;
    width: 40px;
    justify-content: center;
  }
}
</style>
