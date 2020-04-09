function throttle (fn, delay = 100) {
  let timer = null
  return function () {
    if (timer) {
      return false
    }
    timer = setTimeout(() => {
      fn.call(this, ...arguments)
      timer = null
    }, delay)
  }
}

export default throttle
