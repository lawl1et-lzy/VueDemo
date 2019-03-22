import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let savePoint1 = '10'
let savePoint2 = '10'
function RandomData () {
  let point3 = Math.random() * 200
  let point4 = Math.random() * 200
  const obj = {
    'header': {
      'v': 'V1.2.0',
      'uuid': 'D495CC9EDFDE44FA9A6EBCEB047CCA4E',
      'mt': 6
    },
    'body': {
      'mv': 'V1.2.0',
      'qqRId': '656865219778',
      'rId': '0',
      'sRId': '1',
      'rmt': 4,
      'mct': [
        'D495CC9EDFDE44FA9A6EBCEB047CCA4E',
        savePoint1,
        savePoint2,
        point3,
        point4,
        2.0,
        '#000000'
      ]
    }
  }
  savePoint1 = point3
  savePoint2 = point4
  return obj
}
export default new Vuex.Store({
  state: {
    data: {
      point1: {
        x: '',
        y: ''
      },
      point2: {
        x: '',
        y: ''
      },
      lineWidth: 1,
      strokeStyle: '#000000'
    }
  },
  mutations: {
    fetchData (state, time) {
      setInterval(() => {
        let obj = RandomData()
        this.commit('handleData', obj)
      }, time)
    },
    handleData (state, payload) {
      let mct = payload['body']['mct']
      state.data.point1.x = mct[1]
      state.data.point1.y = mct[2]
      state.data.point2.x = mct[3]
      state.data.point2.y = mct[4]
      state.data.strokeStyle = mct[6]
    }
  }
})
