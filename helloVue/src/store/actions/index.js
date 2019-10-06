
import {GOODS_INCREASE, GOODS_DELETE} from '../mutation-types'
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
const actions = {
  increase ({ commit }, payload) {
    // 模拟异步
    setTimeout(() => {
      commit(GOODS_INCREASE, payload)
    }, 200)
  },
  delete ({ commit }, payload) {
    // 模拟异步
    setTimeout(() => {
      commit(GOODS_DELETE, payload)
    }, 200)
  }
}

export default actions
