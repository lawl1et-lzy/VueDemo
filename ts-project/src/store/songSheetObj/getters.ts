import { GetterTree } from 'vuex'
import { SongSheetObjState, RootState } from '@/store/types'
  
const getters: GetterTree<SongSheetObjState, RootState> = {
  songSheetObj: (state): object => {
    return state.songSheetObj
  }
}

export default getters