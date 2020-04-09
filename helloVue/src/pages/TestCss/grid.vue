<template>
  <div class="contanier">
    foo
    <div class="grid">
      <p
        v-for="(item, index) in list"
        class="item"
        :class="`item-${item}`"
        :key="index">
        {{item}}
      </p>
    </div>
    bar
  </div>
</template>

<script>
export default {
  name: 'Grid',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>

<style lang="scss" scoped>
.contanier {
  padding: 50px;
}
.grid {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;

  // 超出行或者列的大小
  // grid-auto-rows: 100px;
  // grid-auto-columns: 100px;

  // grid-template-columns: repeat(auto-fill, 100px); // 尽量在一行上面显示
  // grid-template-rows: repeat(auto-fill, 100px); // 尽量在一列上显示
  // grid-template-columns: 100px auto 100px; // 左右固定，中间自适应

  // minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
  // grid-template-columns: 200px 3fr minmax(100px, 1fr);

  // 设置间隙
  // column-gap: 20px;
  // row-gap: 20px;

  // 区域命名 埋下坑点
  // grid-template-areas: "header header header"
  //                    "main main sidebar"
  //                    "footer footer footer";

  // 摆放方向
  // grid-auto-flow: row;

  // 尽量密集的摆放
  // grid-auto-flow: row dense;

  // 所有单元格的[内容]如何对齐
  // justify-items: center; // 水平对齐
  // align-items: center; // 垂直对齐

  // 项目之间如何对齐
  // justify-content: space-evenly; // 水平
  // align-content: space-between; // 垂直

  .item{
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.item-1 {
  // grid-area: header; // 指定一个grid-template-areas区域
  // grid-area: 1 / 1 / 3 / 3; // 指定一个网格线区域 <row-start> / <column-start> / <row-end> / <column-end>

  // grid-row-start: 1; // 指定项目从第几根【行网格线】开始
  // grid-row-end: 3; // 指定项目从第几根【行网格线】结束
  // grid-row: 1 / 3; // 简写 <row-start> / <row-end>

  // grid-column-start: 1; // 指定项目从第根【列网格线】开始
  // grid-column-end: 3; // 指定项目从第根【列网格线】结束
  // grid-column: 1 / 3; // 简写

  // justify-self: start; // 单元格水平如何对齐
  // align-self: start; // 单元格垂直如何对齐
  background-color: #ef342a;
}

.item-2 {
  // grid-area: main;
  background-color: #f68f26;
  // grid-column-start: 1;
  // grid-column-end: 3;
}

.item-3 {
  // grid-area: sidebar;
  background-color: #4ba946;
}

.item-4 {
  // grid-area: footer;
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}

.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
}

.item-9 {
  background-color: #4dc7ec;
}
</style>
