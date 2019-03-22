<template>
  <div>
    <input id="fileInput" name="file" type="file" accept="image/*" multiple="multiple">
    <br />
    <div id="preview" class="preview">
      <img :src="src" alt="" width="100%">
    </div>
  </div>
</template>

<script>
import EXIF from 'exif-js'
export default {
  name: 'Upload',
  data () {
    return {
      // 旋转的角度
      orientation: '',
      src: '',
      canvas: ''
    }
  },
  methods: {
    bytesToSize (bytes) {
      if (!bytes) return '0 B'
      let k = 1024
      let size = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      // Math.log() 返回数字的自然对数 log(b)/log(a)=loga(b)) 换底公式 log以a为底b的对数
      // Math.floor(x) -- 向下取整，返回小于或等于x的值
      // Math.pow(x,y) -- 返回以x的y次幂，等同于x^y的数值表达式
      let i = Math.floor(Math.log(bytes) / Math.log(k))
      return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + size[i]
    },
    rotateImg (img, orientation, canvas, ctx) {
      if (!(img && orientation && canvas)) return false
      switch (orientation) {
        case 6:// 需要顺时针（向左）90度旋转
          canvas.width = img.height
          canvas.height = img.width
          ctx.rotate(90 * Math.PI / 180)
          ctx.drawImage(img, 0, -img.height, img.width, img.height)
          break
        case 8:// 需要逆时针（向右）90度旋转
          canvas.width = img.height
          canvas.height = img.width
          ctx.rotate(-90 * Math.PI / 180)
          ctx.drawImage(img, -img.width, 0, img.width, img.height)
          break
        case 3:// 需要180度旋转ctx.rotate(-90 * Math.PI / 180)
          canvas.width = img.width
          canvas.height = img.height
          ctx.rotate(180 * Math.PI / 180)
          ctx.drawImage(img, -img.width, -img.height, img.width, img.height)
          break
      }
    }
  },
  mounted () {
    let _this = this
    const fileElem = document.querySelector('#fileInput')
    // const preview = document.querySelector('.preview')

    // 读取input信息
    fileElem.addEventListener('change', (event) => {
      let file = fileElem.files[0]
      console.log(event)
      console.log(file)
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(event.target.value)) {
        return false
      }

      // 获取方向
      EXIF.getData(file, function () {
        EXIF.getAllTags(this)
        _this.orientation = EXIF.getTag(this, 'Orientation')
      })

      // 处理文件流
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        console.log('reader', e)

        const img = new Image()
        img.onload = function () {
          let canvas = _this.canvas = document.createElement('canvas')
          let ctx = canvas.getContext('2d')
          canvas.width = this.naturalWidth
          canvas.height = this.naturalHeight
          ctx.drawImage(this, 0, 0, canvas.width, canvas.height)

          // 修复IOS图片旋转问题
          if (_this.orientation !== '' && _this.orientation !== 1) {
            console.log('旋转处理')
            _this.rotateImg(this, _this.orientation, canvas, ctx)
            console.log('输出处理')
            _this.src = _this.canvas.toDataURL('image/png', 0.8)
          }
        }
        img.src = e.target.result
      }
    })
  }
}
</script>

<style lang="scss">
.preview{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  min-height: 200px;
  border: 1px dotted black;
}
.img{
  width: 100%;
  height: auto;
}
</style>
