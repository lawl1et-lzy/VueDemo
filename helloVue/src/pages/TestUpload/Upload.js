/* eslint-disable */
import EXIF from 'exif-js'
class Upload {
  // 默认参数
  defaultOpts = {
    quality: 0.7,
    limit: 3,
    accept: 'image/*', // MIME type
    multiple: true // 是否支持多张上传
  }
  constructor (options = {}) {
    this.el = null // 创建 input dom元素
    this.__init(options)
  }
  /**
   * 初始化
   * @private
   * @param {Object} options 
   */
  __init (options) {
    Object.assign(this.defaultOpts, options)
    this.__createInputDom()
  }
  /**
   * 创建 input 标签
   * @private
   */
  __createInputDom () {
    this.el = document.createElement('input')
    this.el.type = 'file'
    this.el.accept = this.defaultOpts.accept
    this.el.multiple = this.defaultOpts.multiple
  }
  /**
   * @private
   */
  __isObject (params) {
    return params instanceof Object && !Array.isArray(params)
  }
  /**
   * @private
   */
  __hasList (arr) {
    return Array.isArray(arr) && arr.length > 0
  }
  // 选择图片
  select () {
    return new Promise((resolve, reject) => {
      this.el.addEventListener('change', (e) => {
        const files = Array.from(e.target.files)
        if(this.__hasList(files)) {
          const pAll = files.map(file => this.__exifImg(file))
          Promise.all(pAll)
            .then(res => {
              resolve(res)
            })
            .catch(err => {
              reject(err)
            })
        } else {
          let fileObj = { // 默认输出对象
            errorMsg: '选择图片出现错误',
          }
          reject(fileObj)
        }
      })
      this.el.click()
    })
  }
  /**
   * EXIF
   * @private
   * @param { Object } file 文件信息
   * @return { Object } fileObj 
   */
   __exifImg(file) {
    return new Promise((resolve, reject) => {
      let orientation = null
      const REG_MIME_IMG = /(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const { 
        type,
        name 
      } = file // 当前文件信息
      let fileObj = { // 默认输出对象
        name,
        errorMsg: '', // 错误数据
        src: '', // 处理后的文件路径
      }
      if (REG_MIME_IMG.test(type)) {
        EXIF.getData(file, () => {
          orientation = EXIF.getTag(file, 'Orientation');
        })
        const fileReader = new FileReader()
        const img = new Image()
        img.onload = () => {
          const expectWidth = img.naturalWidth
          const expectHeight = img.naturalHeight

          ctx.save()
          switch(orientation) {
            case 6: // 顺时针旋转 90
              canvas.width = expectHeight
              canvas.height = expectWidth
              ctx.rotate((90 * Math.PI) / 180);
              ctx.drawImage(img, 0, -expectHeight, expectWidth, expectHeight) 
              break;
            case 3: // 顺时针旋转 180
              canvas.width = expectWidth
              canvas.height = expectHeight
              ctx.rotate((180 * Math.PI) / 180);
              ctx.drawImage(img, -expectWidth, -expectHeight, expectWidth, expectHeight);
              break;
            case 8: // 顺时针旋转 270
              canvas.width = expectHeight
              canvas.height = expectWidth
              ctx.rotate((270 * Math.PI) / 180);
              ctx.drawImage(img, -expectWidth, 0, expectWidth, expectHeight);
              break;
            case 2: // 垂直翻转
              canvas.width = expectWidth
              canvas.height = expectHeight
              ctx.scale(-1, 1)
              ctx.drawImage(img, -expectWidth, 0, expectWidth, expectHeight);
              break;
            case 4: // 水平翻转
              canvas.width = expectWidth
              canvas.height = expectHeight
              ctx.scale(1, -1)
              ctx.drawImage(img, -expectHeight, 0, expectHeight, expectWidth);
              break;
            case 5: // 顺时针旋转 90 Y轴对称
              canvas.width = expectHeight
              canvas.height = expectWidth
              ctx.rotate((90 * Math.PI) / 180)
              ctx.scale(1, -1)
              ctx.drawImage(img, 0, 0, expectWidth, expectHeight);
              break;
            case 7: // 顺时针旋转 90 x轴对称
              canvas.width = expectHeight
              canvas.height = expectWidth
              ctx.rotate((90 * Math.PI) / 180)
              ctx.scale(-1, 1)
              ctx.drawImage(img, -expectWidth, -expectHeight, expectWidth, expectHeight);
              break;
            default:
              canvas.width = expectWidth
              canvas.height = expectHeight
              ctx.drawImage(img, 0, 0, expectWidth, expectHeight);
              break;
          }
          ctx.restore()
          fileObj.src = canvas.toDataURL('image/jpeg')
          resolve(fileObj)
        }
        img.onerror = () => {
          fileObj = {
            errorMsg: `${name}: 图片加载失败`
          }
          resolve(fileObj)
        }
        fileReader.onload = (e) => {
          img.src = e.target.result;
        }
        fileReader.readAsDataURL(file)
      } else {
        fileObj = {
          errorMsg: `${name}: 该文件非图片格式`
        }
        resolve(fileObj)
      }
    })
  }
}

export default Upload
