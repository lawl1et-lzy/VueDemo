const Observer = (function () {
  let __message = {}
  return {
    // 订阅消息
    listern (type, fn) {
      if (__message[type] == null) {
        __message[type] = [fn]
      } else {
        __message[type].push(fn)
      }
    },
    // 发布消息
    trigger () {
      let type = Array.prototype.shift.call(arguments)
      if (Array.isArray(__message[type])) {
        let len = __message[type].length
        for (let i = len - 1; i >= 0; i--) {
          __message[type][i].call(this, ...arguments) // 传入字符串参数
        }
      }
    },
    // 取消订阅
    off (type, fn) {
      let fns = __message[type]

      console.log('fns', fns)
      // 判断是否有对应的消息
      if (!Array.isArray(fns)) return false

      // 取消订阅
      for (let [i, v] of Object.entries(fns)) {
        if (v === fn) fns.splice(i, 1)
      }
    }
  }
})()
function fnBuy (name, loc, price) {
  console.log(`${name}想在${loc}买一套￥${price}的房子`)
}
Observer.listern('buy', fnBuy)

Observer.trigger('buy', 'lawl1et', '上海', '500')

Observer.trigger('buy', 'niya', '厦门', '200')

Observer.off('buy', fnBuy)

Observer.trigger('buy', 'lawl1et', '上海', '500')
