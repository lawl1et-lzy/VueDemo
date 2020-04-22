<template>
  <div class="container">
    <div class="border">border</div>
  </div>
</template>

<script>
export default {
  name: 'Meta',
  created () {
    (function flexible (window, document) {
      let dpr = window.devicePixelRatio || 1
      const doc = document
      const docEl = doc.documentElement

      // 1. 计算最终 dpr
      // const isAndroid = window.navigator.appVersion.match(/android/gi)
      const isIphone = window.navigator.appVersion.match(/iphone/gi)

      if (isIphone) {
        // IOS 下，对于2、3的屏幕，用2倍的方案，其余的用1倍的方案
        if (dpr >= 3) {
          dpr = 3
        } else if (dpr >= 2) {
          dpr = 2
        } else {
          dpr = 1
        }
      } else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1
      }

      // 设置缩放比例
      const scale = 1 / dpr

      // 2. 设置 meta 属性
      const metaEl = doc.createElement('meta')
      const content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`
      metaEl.setAttribute('name', 'viewport')
      metaEl.setAttribute('content', content)

      if (docEl.firstElementChild) {
        document.documentElement.firstElementChild.appendChild(metaEl)
      } else {
        const wrap = doc.createElement('div')
        wrap.appendChild(metaEl)
        document.write(wrap.innerHTML)
      }

      // 3. 设置 1rem = clientWidth / 10
      function setRemUnit () {
        const rem = docEl.clientWidth / 10
        docEl.style.fontSize = `${rem}px`
        console.log('setRemUnit')
      }

      setRemUnit()

      // reset rem unit on page resize
      window.addEventListener('resize', setRemUnit)
      window.addEventListener('pageshow', function (e) {
        console.log('is page from cache, persisted', e.persisted)
        if (e.persisted) {
          setRemUnit()
        }
      })
    }(window, document))
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .border {
    // width: 200px;
    width: 2.666rem;
    margin-top: 20px;
    padding: 20px;
    font-size: 36px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  }
}
</style>
