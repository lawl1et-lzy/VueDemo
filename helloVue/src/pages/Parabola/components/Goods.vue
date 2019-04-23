<template>
  <div class="wrapper" ref="wrapper">
    <div class="list">
      <div class="good"
        v-for="(item, index) in goods"
        :key="index"
      >
        <!-- 商品信息 -->
        <div class="info">
          <div class="img"></div>
          <div class="desc">
            <div class="name">{{ item.name }}</div>
            <div class="price">￥{{ item.price }}</div>
          </div>
        </div>
        <!-- 添加商品 -->
        <div class="select-widge">
          <div class="box decrease" @click="handleDecreaseClick(item)">-</div>
          <div class="num">{{ item.num ? item.num : 0 }}</div>
          <div class="box increase" @click="handleIncreaseClick(item)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parabola from '../utils.js'
export default {
  name: 'Goods',
  props: {
    goods: [Array]
  },
  data () {
    return {
    }
  },
  methods: {
    // -
    handleDecreaseClick (item) {
      if (item.num && item.num > 0) {
        let num = item.num - 1
        this.$set(item, 'num', num)
      }
    },
    // +
    handleIncreaseClick (item) {
      if (item.num) {
        let num = item.num + 1
        this.$set(item, 'num', num)
      } else {
        this.$set(item, 'num', 1)
      }
      let target = document.querySelector('#shopping-car')
      Parabola.init(event, event.target, target, this)
    }
  }
}
</script>

<style lang="scss" scoped>
.good{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 0;
  padding: 20px;
  border: 1px solid black;
  .info{
    display: flex;
    align-items: center;
    .img{
      width: 100px;
      height: 100px;
      background: url('~@/images/portrait.png') no-repeat;
      background-size: 100%;
    }
  }
  .select-widge{
    display: flex;
    .num{
      margin: 0 10px;
    }
    .box{
      border: 1px solid black;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
