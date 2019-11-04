<template>
  <div class="song-sheet">
    <SongSheetList 
      :playlist="playlist"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { SongSheetParams } from '@/interface/index'
import Cookies from 'js-cookie'
import Api from '@/api/index'
import SongSheetList from '@/components/SongSheetList.vue'

@Component({
  components: {
    SongSheetList
  }
})
export default class SongSheet extends Vue {
  private user: any = null
  private playlist: Array<any> = []
  created() {
    this.init() 
  }
  private init(): void {
    const user: string = Cookies.get('ts_user') || ''
    this.user = user && JSON.parse(user)
    if(this.user) {
      let rq: SongSheetParams = {
        uid: this.user.id
      }
      this.fetchSongSheet(rq)
    } else {
      this.$router.push({
        name: 'Login'
      })
    }
  }
  private async fetchSongSheet(params: SongSheetParams): Promise<void> {
    const res: any = await Api.getSongSheet(params)
    const { code, playlist } = res
    if(code && code === 200) {
      this.playlist = playlist
    }
  }
}
</script>
<style lang="scss" scoped>
.song-sheet{
  width: 100%
}
</style>