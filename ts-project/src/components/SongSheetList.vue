<template>
  <div class="section">
    <div class="scroll-view-item"
      v-for="item in playlist"
      :key="item.id"
      @click="handleSongSheetItemClick(item)">
      <img class="img" :src="item.coverImgUrl" />
      <div class="sheet">
        <div class="sheet-name">{{ item.name }}</div>
        <div class="sheet-num">{{ item.trackCount }}首</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator'
  
@Component
export default class SongSheetList extends Vue {
  @Prop(Array) readonly playlist!: Array<any> // ! 表示可以为undefined或者null

  @Emit('songSheetClick')
  handleSongSheetItemClick(item: any): any {
    return item
  }

  // private handleSongSheetItemClick(item: any): void {
  //   this.$emit('songSheetClick', item)
  // }
}
</script>

<style lang="scss" scoped>
.section{
  padding-bottom: 20px;
  .scroll-view-item{
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 10px;
    .img{
      border-radius: 8px;
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }
    .sheet{
      height: 100%;
      .sheet-name{
        font-size: 32px;
      }
      .sheet-num{
        font-size: 24px;
      }
    }
  }
}
</style>