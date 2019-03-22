import {GOODS_INCREASE, GOODS_DELETE} from '../mutation-types'
const mutations = {
  [GOODS_INCREASE] (state, payload) {
    state.selected.push(payload)
  },
  [GOODS_DELETE] (state, payload) {
    let index = state.selected.findIndex(item => item.id === payload.id)
    state.selected.splice(index, 1)
  }
}

export default mutations
