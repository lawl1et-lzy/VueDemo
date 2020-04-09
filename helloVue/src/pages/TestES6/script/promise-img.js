function imgHasReady (src) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      const err = new Error(`图片加载失败 src: ${src}`)
      reject(err)
    }
    img.src = src
  })
}
