// 编写一个通用的事件绑定函数
function bindEvent (elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event => {
    const target = event.target
    if (selector) {
      // 事件代理
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      // 普通事件
      fn.call(target, event)
    }
  })
}

export {
  bindEvent
}
