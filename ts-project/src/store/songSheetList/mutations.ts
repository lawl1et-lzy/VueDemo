import { MutationTree } from 'vuex'
import type from './mutations-types'
import { base } from '@/util/base'
import { SongSheetListState } from '@/store/types'

const mutations: MutationTree<SongSheetListState> = {
  // 设置歌单列表
  [type.GET_SONG_SHEET_LIST] (state, payload): any {
    if(!base.hasList(payload)) return false
    state.songSheetList = payload
  }
}

export default mutations
  