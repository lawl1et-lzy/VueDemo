<template>
  <div class="section">
    <!-- 基本信息 -->
    <div class="detail" v-if="playlist">
      <img class="img-main" :src="playlist.coverImgUrl" alt="">
      <div class="detail-info">
        <div class="info-name">{{ playlist.name }}</div>
        <div class="info-user">
          <img class="img-head" :src="playlist.creator && playlist.creator.avatarUrl" alt="">
          <div class="user-name">{{ playlist.creator && playlist.creator.nickname }}</div>
        </div>
        <div class="info-edit">编辑简介</div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div
      v-if="playlist"
      class="list">
      <div
        class="song"
        v-for="(item, index) in playlist.tracks"
        :key="index"
        @click="handleSongClick(item.id)">
          <div class="song-index">
            {{ index + 1 }}
          </div>
          <div class="song-info">
            <div class="info-name">
              {{ handleInfoName(item.name, item.alia) }}
            </div>
            <div class="info-author">
              {{ item.ar[0].name }}
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Action, namespace } from 'vuex-class'
import { SongSheetObjParams } from '@/interface'
import { base } from '@/util/base'

const SongSheetObjModule = namespace('SongSheetObj')

@Component({})
export default class SongList extends Vue {
  private playlist: object = {} // 歌单详细信息

  @SongSheetObjModule.Getter songSheetObj: any
  @SongSheetObjModule.Action getSongSheetObj: any

  private created(): void {
    this.init();
  }

  private init(): void {
    const { id } = this.$route.params
    this.getSongSheetObj({ id })
  }

  @Watch('songSheetObj', { immediate: true })
  handleWatchSongSheetObj(n: any, o: any) {
    if(n && !Array.isArray(n)) {
      this.playlist = n
    }
  }

  private handleSongClick(id: string): void {
    alert("后续功能等待开发中,敬请期待...")
  }

  private handleInfoName(name: string, alia: string[]): string {
    if(base.hasList(alia)) {
      return `${name}(${alia})`
    }
    return `${name}`
  }
}
</script>

<style lang="scss" scoped>
.section{
  .detail{
    display:flex;
    padding: 20px;
    .img-main{
      flex-shrink: 0;
      width:200px;
      height:200px;
      border-radius:16px;
      margin-right:20px;
    }
    .detail-info{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      .info-name {
        font-size:30px;
      }
      .info-user{
        display:flex;
        align-items:center;
        .img-head{
          width:40px;
          height:40px;
          border-radius:50%;
          margin-right: 10px;
        }
        .user-name{
          font-size: 26px;
        }
      }
      .info-edit{
        font-size: 24px;
      }
    }
  }
  .list {
    .song{
      display:flex;
      margin: 30px 0 0 20px;
      align-items:center;
      .song-index{
        font-size:26px;
        margin-right:20px;
      }
      .song-info{
        .info-name {
          font-size: 30px;
          width: 500px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .info-author{
          font-size: 22px;
        }
      }
    }
  }
}
</style>