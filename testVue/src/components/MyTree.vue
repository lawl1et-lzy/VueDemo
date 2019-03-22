<template>
  <ul>
    <li v-for="item in treeData" :key="item.id">
       <span :class="{'glyphicon glyphicon-triangle-right': item.children ? true : false}"></span>
       {{item.label}}
      <my-tree v-if="item.children" :treeData="item.children"></my-tree>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MyTree',
  props: {
    treeData: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  padding: 4px;
  li{
    padding: 4px;
  }
}
</style>
