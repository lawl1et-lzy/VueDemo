/* eslint-disable */
function throttle (fn, delay = 100) {
  let timer = null
  return (...args) => {
    if(timer) return false
    timer = setTimeout(() => {
      fn.call(this, ...args)
      timer = null
    }, delay)
  }
}

document.addEventListener('mousemove', throttle(() => console.log(new Date().getTime(), this), 1000), false);
