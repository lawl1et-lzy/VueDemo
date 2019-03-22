<template>
  <div></div>
</template>

<script>
export default {
  name: 'HaveSeen'
  // props: {
  //   list: {
  //     type: Array
  //   }
  // },
  // data () {
  //   return {
  //     radioSelected: '' // 单选框选中
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/base.scss";
$pd30: 30px;
$mg14: 14px;
// 见过老师
.haveSeen {
  display: flex;
  padding: 35px $pd30;
  flex-direction: column;
  .haveSeen-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 34px;
    color: #333333;
  }
}
</style>
