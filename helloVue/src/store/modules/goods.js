import getters from '../getters'
import actions from '../actions'
import mutations from '../mutations'
const MOCK = [
  {
    id: 1,
    name: 'iphone6',
    price: 5000
  },
  {
    id: 2,
    name: 'iphone7',
    price: 6000
  },
  {
    id: 3,
    name: 'iphone8',
    price: 7000
  },
  {
    id: 4,
    name: 'iphoneX',
    price: 8000
  }
]
const goods = {
  state: {
    data: MOCK,
    selected: []
  },
  getters,
  actions,
  mutations
}

export default goods
