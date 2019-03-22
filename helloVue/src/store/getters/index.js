const getters = {
  // 给每一项加上商品的类型
  phone: state => {
    state.data.forEach(item => {
      item.type = 'phone'
    })
    return state.data
  }
}

export default getters
