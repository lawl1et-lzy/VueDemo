<template>
  <div class="wrapper">
    <!-- 商品列表 -->
    <v-goods
      :goods="goods"
    >
    </v-goods>
    <!-- 购物车 -->
    <shopping-car></shopping-car>
  </div>
</template>

<script>
import goods from 'static/data.json'
const VGoods = () => import('./components/Goods.vue')
const ShoppingCar = () => import('./components/shopping-car.vue')
export default {
  name: 'Parabola',
  data () {
    return {
      goods: ''
    }
  },
  components: {
    VGoods,
    ShoppingCar
  },
  created () {
    let i = 0
    this.goods = goods.goods[0].foods
    this.goods.forEach(item => {
      item.id = ++i
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
