/* eslint-disable */
class Canvas_op {
  constructor (options) {
    this.ctx = options.ctx || ''
  }
  // 直线
  handle_direct_line ({ point1, point2, lineWidth, strokeStyle }) {
    if (point1.x > 891 || point2.x > 891 || point1.y > 630 || point2.y > 630) {
      return false
    }
    if (point1.x === point2.x && point1.y === point2.y) {
      return false
    }
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.moveTo(this.handle_radio(point1.x), this.handle_radio(point1.y))
    this.ctx.lineWidth = this.handle_radio(lineWidth)
    this.ctx.strokeStyle = strokeStyle
    this.ctx.lineTo(this.handle_radio(point2.x), this.handle_radio(point2.y))
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.restore()
  }
  handle_radio (number) {
    return Math.round(number * this.point_radio * window.devicePixelRatio * this.canvas_radio)
  }
}

export default Canvas_op
