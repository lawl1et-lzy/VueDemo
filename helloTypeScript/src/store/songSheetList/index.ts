import { Module } from 'vuex'
import { SongSheetListState, RootState } from '@/store/types'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const namespaced: boolean = true;

const SongSheetList: Module<SongSheetListState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
}

export {
  SongSheetList
}