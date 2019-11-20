import { ActionTree } from 'vuex'
import { SongSheetObjState, RootState } from '@/store/types'
import { SongSheetObjParams } from '@/interface'
import type from './types'
import Api from '@/api'

const actions: ActionTree<SongSheetObjState, RootState> = {
  async getSongSheetObj({ commit }, payload: SongSheetObjParams): Promise<void> {
    const res: any = await Api.getSongSheetObj(payload)
    const { playlist, code } = res
    if(code === 200) {
      commit(type.GET_SONG_SHEET_OBJECT, playlist)
    }
  }
}

export default actions