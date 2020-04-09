/**
 * 仿 JQuery
 */
class JQuery {
  constructor (selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
  }
  get (index) {
    return this[index]
  }
  each (fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }
  on (type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false)
    })
  }
}

// 插件
JQuery.prototype.dialog = (msg) => {
  alert(msg)
}

// 造轮子
class MyJquery extends JQuery {
  alertIndex (index) {
    alert(this[index])
  }
}
export default MyJquery
