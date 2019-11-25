import { ActionTree } from 'vuex'
import type from './mutations-types'
import { SongSheetParams } from '@/interface'
import { SongSheetListState, RootState } from '@/store/types'
import Api from '@/api'

const actions: ActionTree<SongSheetListState, RootState> = {
  async getSongSheet({ commit }, payload: SongSheetParams): Promise<void> {
    const res: any = await Api.getSongSheet(payload)
    const { code, playlist } = res
    if(code && code === 200) {
      commit(type.GET_SONG_SHEET_LIST, playlist) 
    }
  } 
}

export default actions