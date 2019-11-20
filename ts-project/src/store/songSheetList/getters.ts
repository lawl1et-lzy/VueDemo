import { GetterTree } from 'vuex'
import { SongSheetListState, RootState } from '@/store/types'
const getters: GetterTree<SongSheetListState, RootState> = {
  // 歌单列表
  getSongSheetList: (state): Array<any> => {
    return state.songSheetList
  }
}

export default getters