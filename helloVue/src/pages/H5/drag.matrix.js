/* 定义元素变量 */
let ELEMENT = null
let DRAG_EL = null

/* 定义距离尺寸的存储池 */
let E_SIZER = {}

function getStyle (el, attr) {
  if (typeof window.getComputedStyle !== 'undefined') {
    return window.getComputedStyle(el, null)[attr]
  } else if (typeof el.currentStyle !== 'undefined') {
    return el.currentStyle[attr]
  }
  return ''
}

/**
 * mousedown事件
 * @param {MouseEvent} evte 鼠标事件对象
 * @returns {undefined}
 **/
function bindMouseDownEvent (
  evte
) {
  // 阻止冒泡
  evte.stopPropagation()
  // 阻止默认事件
  evte.preventDefault()

  // 解析matrix的正则
  let matrix3dReg = /^matrix3d\((?:[-\d.]+,\s*){12}([-\d.]+),\s*([-\d.]+)(?:,\s*[-\d.]+){2}\)/
  let matrixReg = /^matrix\((?:[-\d.]+,\s*){4}([-\d.]+),\s*([-\d.]+)\)$/
  // 获取解析后的transform样式属性值(计算后的样式)
  let matrix3dSourceValue = getStyle(
    DRAG_EL,
    'transform'
  )
  // 使用正则解析matrix
  let matrix3dArrValue = matrix3dSourceValue.match(matrix3dReg) || matrix3dSourceValue.match(matrixReg)
  // 记录鼠标点击时的坐标
  E_SIZER['clientX'] = evte.clientX
  E_SIZER['clientY'] = evte.clientY
  // 记录matrix解析后的translateX & translateY的值
  E_SIZER['targetX'] = matrix3dArrValue[1]
  E_SIZER['targetY'] = matrix3dArrValue[2]

  // 计算坐标边界巨鹿
  E_SIZER['distX'] = E_SIZER['clientX'] - E_SIZER['targetX']
  E_SIZER['distY'] = E_SIZER['clientY'] - E_SIZER['targetY']

  // 绑定mousemove事件
  document.addEventListener('mousemove', bindMouseMoveEvent, false)
}

/**
 * mousemove事件
 * @param {MouseEvent} evte 鼠标事件对象
 * @returns {undefined}
 **/
function bindMouseMoveEvent (
  evte
) {
  evte.stopPropagation()
  evte.preventDefault()

  let moveX = evte.clientX - E_SIZER['distX']
  let moveY = evte.clientY - E_SIZER['distY']

  // 写入style
  DRAG_EL.style.transform =
  DRAG_EL.style.mozTransform =
  DRAG_EL.style.webkitTransform =
  `translate3d(${moveX}px, ${moveY}px, 1px)`
}

/**
 * mouseup事件
 * @param {MouseEvent} evte 鼠标事件对象
 * @returns {undefined}
 **/
function bindMouseUpEvent (
  evte
) {
  evte.stopPropagation()
  evte.preventDefault()

  document.removeEventListener('mousemove', bindMouseMoveEvent)
}

/**
 * 绑定事件
 * @param {MouseEvent} evte 鼠标事件对象
 * @returns {undefined}
 **/
function initBindEvent (el, dragEl) {
  // 绑定mousedown事件
  ELEMENT = el
  DRAG_EL = dragEl
  ELEMENT.addEventListener('mousedown', bindMouseDownEvent, false)
  // 绑定mouseup事件
  document.addEventListener('mouseup', bindMouseUpEvent, false)
}

export default initBindEvent
