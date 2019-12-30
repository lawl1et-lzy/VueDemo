/* eslint-disable */
import EXIF from 'exif-js'
class Upload {
  // 默认参数
  defaultOpts = {
    quality: 0.9,
    limit: 3,
    accept: 'image/*', // MIME type
    multiple: true, // 是否支持多张上传
    showLog: false, // 是否显示 log
    width: null, // 宽度
    height: null // 高度
  }
  // 工具类
  util = new Util()
  constructor (options) {
    this.el = null // 创建 input dom元素
    this.opts = {} // 参数
    if(!this.util.isObject(options)) {
      options = {}
    }
    this.__init(options)
  }
  /**
   * 初始化
   * @private
   * @param {Object} options 
   */
  __init (options) {
    this.opts = Object.assign({}, this.defaultOpts, options)
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
  // 选择图片
  select () {
    return new Promise((resolve, reject) => {
      // 添加标识，避免多次注册监听事件
      if(this.el.getAttribute('data-change-listener') !== '1') {
        this.el.setAttribute('data-change-listener', '1')
        this.el.addEventListener('change', (e) => {
          this.fn(e, resolve, reject)
        }, false)
      }
      this.el.click()
    })
  }
  fn = (e, resolve, reject) => {
    const files = Array.from(e.target.files)
    if(this.util.hasList(files)) {
      const pAll = files.map(file => this.__exifImg(file))
      Promise.all(pAll)
        .then(res => {
          const rel = this.__handleEmitFile(res)
          const { files, logArr } = rel
          if(this.opts.showLog) {
            this.__handleSendLog(logArr)
          }
          resolve(files)
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
  }
  /**
   * 输出log
   * @param {Array} logArr 
   */
  __handleSendLog(logArr) {
    let log = new Log()
    for(let item of logArr) {
      log.add(item)
    }
    console.log('log', log)
    log.table()
  }
  /**
   * 分离 log 和 图片数据
   * @param { Array } data 
   * @return { Object }
   */
  __handleEmitFile(data) {
    let logArr = [] // log 数据
    let files = [] // 图片 数据
    for(let item of data) {
      let { 
        name,
        errorMsg, // 错误数据
        src, // 处理后的文件路径
        type, // 文件类型
        originSize, // 原始图片大小
        afterSize, // 压缩图片大小
        originWidth, // 原始图片宽度
        originHeight, // 原始图片高度
        afterWidth, // 压缩后的图片宽度
        afterHeight, // 压缩后的图片高度
        quality, // 压缩质量
        ratio, // 压缩比率
      } = item
      let log = {}
      let file = {}

      file.name = name
      file.errorMsg = errorMsg || ''
      file.src = src || ''
      files.push(file)
      
      // 原始log
      log = {
        name: `${name}-origin`,
        type,
        size: `${originSize}(${this.util.convert(originSize)})`,
        width: originWidth,
        height: originHeight,
        quality: null,
        ratio: null
      }
      logArr.push(log)
      log = {
        name: `${name}-after`,
        type,
        size: `${afterSize}(${this.util.convert(afterSize)})`,
        width: afterWidth,
        height: afterHeight,
        quality: quality,
        ratio: ratio
      }
      logArr.push(log)
    }
    return {
      logArr,
      files
    }
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

      // 当前文件信息
      const { 
        type,
        name,
        size,
      } = file 

      // 默认输出对象
      let fileObj = { 
        name,
        errorMsg: '', // 错误数据
        src: '', // 处理后的文件路径

        type, // 文件类型
        originSize: size, // 原始图片大小
        afterSize: 0, // 压缩图片大小
        originWidth: 0, // 原始图片宽度
        originHeight: 0, // 原始图片高度
        afterWidth: 0, // 压缩后的图片宽度
        afterHeight: 0, // 压缩后的图片高度
        quality: this.opts.quality, // 压缩质量
        ratio: null, // 压缩比率
      }

      if (REG_MIME_IMG.test(type)) {
        EXIF.getData(file, () => {
          orientation = EXIF.getTag(file, 'Orientation');
        })
        const fileReader = new FileReader()
        const img = new Image()
        img.onload = () => {
          // 原始宽高
          const naturalWidth = fileObj.originWidth = img.naturalWidth
          const naturalHeight = fileObj.originHeight = img.naturalHeight
          
          // 宽/高 比
          const scale = naturalWidth / naturalHeight

          // 设置宽高 
          const expectWidth = fileObj.afterWidth = this.opts.width || (naturalWidth > 750 ? 750 : naturalWidth)
          const expectHeight = fileObj.afterHeight = this.opts.height || (expectWidth / scale)

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
          const _base64 = canvas.toDataURL('image/jpeg', this.opts.quality)
          fileObj.afterSize = this.util.calcBase64Size(_base64)
          fileObj.ratio = Number((1 - (Number(fileObj.afterSize) / Number(fileObj.originSize))).toFixed(2))
          fileObj.src = _base64
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

// base util
class Util {
  // 计算 base64 大小
  calcBase64Size(base64url) {
    if(!base64url) return 0
    // 去掉头部
    let str = base64url.replace('data:image/png;base64,', '')
    
    // 找到等号，把等号也去掉
    let ei = str.indexOf('=')
    if(~ei) str = str.substring(0, ei)
    return str.length
  }
  /**
   * 换算
   * 8(位) = 1(Byte)
   * 1024(Byte) = 1KB
   * 1024KB = 1MB
   * 1024MB = 1GB
   */
  convert(byte) {
    let output = ''
    const _byte = Number(byte)
    if(_byte < (0.1 * 1024)) { // 小于 0.1KB，转化为 B
      output = `${_byte.toFixed(2)}B`
    } else if (_byte < (0.1 * 1024 * 1024)) { // 小于 0.1 MB，转化为 KB
      output = `${(_byte / 1024).toFixed(2)}KB`
    } else if (_byte < (0.1 * 1024 * 1024 * 1024)) {// 小于 0.1 GB，转化为 MB
      output = `${(_byte / 1024 / 1024).toFixed(2)}MB`
    } else {
      output = `${(_byte / 1024 / 1024 / 1024).toFixed(2)}GB`
    }
    return output
  }
  // 是否有数组
  hasList (arr) {
    return Array.isArray(arr) && arr.length > 0
  }
  // 是否是对象
  isObject (params) {
    return params instanceof Object && !Array.isArray(params)
  }
}


// 输出 log 
class Log {
  log = {
    name: '', // 名称
    type: '', // 文件类型
    size: 0, // 大小
    width: 0, // 宽度
    height: 0, // 高度
    quality: 1, // 输出质量
    ratio: 1, // 压缩比率
  }
  constructor() {
    this.logArr = []
  }
  /**
   * @param { Object } opts 
   */
  add (opts) {
    const newLog = Object.assign({}, this.log, opts)
    this.logArr.push(newLog)
  }
  table() {
    console.table(this.logArr)
  }
}

export default Upload
