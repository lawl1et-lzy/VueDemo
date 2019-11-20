import { MutationTree } from 'vuex'
import { SongSheetObjState } from '@/store/types'
import type from './types'

const mutations: MutationTree<SongSheetObjState> = {
  [type.GET_SONG_SHEET_OBJECT] (state, payload): any {
    if(!payload) return false
    state.songSheetObj =  payload
  } 
}

export default mutations