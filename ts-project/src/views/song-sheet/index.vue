<template>
  <div class="song-sheet">
    <SongSheetList 
      :playlist="getSongSheetList"
      @songSheetClick="handlerSongSheetClick"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class'
import { SongSheetParams } from '@/interface/index'
import Cookies from 'js-cookie'
import Api from '@/api/index'
import SongSheetList from '@/components/SongSheetList.vue'

const SongSheetListModule = namespace('SongSheetList')

@Component({
  components: {
    SongSheetList
  }
})
export default class SongSheet extends Vue {
  private user: any = null
  private playlist: Array<any> = []

  @SongSheetListModule.Getter getSongSheetList!: any
  @SongSheetListModule.Action getSongSheet!: any

  created() {
    this.init()
  }
  private init(): void {
    const user: string = Cookies.get('ts_user') || ''
    this.user = user && JSON.parse(user)
    if(this.user) {
      const rq: SongSheetParams = {
        uid: this.user.id
      }
      this.getSongSheet(rq)
    } else {
      this.$router.push({
        name: 'Login'
      })
    }
  }
  // 歌单项点击
  private handlerSongSheetClick(songSheet: any): void {
    const songSheetId = songSheet.id
    this.$router.push({
      name: 'SongList',
      params: {
        id: songSheetId
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.song-sheet{
  width: 100%
}
</style>