import { Module } from 'vuex'
import { SongSheetObjState, RootState } from '@/store/types'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
const namespaced: boolean = true

const SongSheetObj: Module<SongSheetObjState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
}
export {
  SongSheetObj
}