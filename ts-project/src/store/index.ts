import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types'
import { SongSheetList } from './songSheetList'
import { SongSheetObj } from './songSheetObj'

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    SongSheetObj,
    SongSheetList
  }
}

export default new Vuex.Store<RootState>(store)
