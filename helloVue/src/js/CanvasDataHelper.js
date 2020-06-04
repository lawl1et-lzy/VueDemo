export default {
  ctxObj: {}, // fabric canvas 对象
  drawObj: null, // 当前 fabric 绘图对象
  cursorPoint: null, // 激光笔实例
  mouseStart: { x: 0, y: 0 }, // 开始的坐标
  mouseTo: { x: 0, y: 0 }, // 移动中的坐标
  msgObj: {}, // 绘图消息体

  /**
   * 动作对应的自由划线数据
   * mct2LongLineMap: {
   *  [mct[0]]: { ... }
   * }
   */
  mct2LongLineMap: {}, // 自由绘图数据
  /**
   * 动作对应的绘图数据
   * mct2DrawObjMap: {
   *  [mct[0]]: {...}
   * }
   */
  mct2DrawObjMap: {},

  /**
   * 能够被反撤销的数据
   * mct2CanRedoMap: {
   *  [mct[0]]: {...}
   * }
   */
  mct2CanRedoMap: {},
  /**
   * 当前所有绘图数据映射
   * canvasData : {
   *   [rId]: {
   *      [sRId]: [
   *         // ...
   *      ]
   *   }
   * }
   */
  canvasData: {
    0: {
      1: []
    }
  },

  /**
   * rId 对应的页码数组
   * rId2pageSizeArr: {
   *    [rId]: ['1', '2']
   * }
   */
  rId2pageSizeArr: {
    0: ['1']
  }
}
