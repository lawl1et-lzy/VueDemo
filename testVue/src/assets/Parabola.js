export class Parabola {
  constructor (options) {
    console.log('options', options)
    this.x1 = options.origin.x
    this.y1 = -options.origin.y

    this.x2 = options.target.x
    this.y2 = -options.target.y

    this.el = options.el

    this.speed = options.speed || 10

    if (options.onMotionDone) this.onMotionDone = options.onMotionDone
    this.curvature = options.curvature || 1
    this.a = Math.pow(Math.sqrt(Math.abs(this.y1 - this.y2)), this.curvature) / 1000

    if (options.direction === 'down') this.a = -this.a

    let t1 = this.y1 - this.a * this.x1 * this.x1
    let t2 = this.y2 - this.a * this.x2 * this.x2
    this.b = (t1 - t2) / (this.x1 - this.x2)
    this.c = t1 - this.b * this.x1
  }

  start () {
    var self = this
    requestAnimationFrame(parabola2target)
    let x = self.x1
    let y, translateX, translateY
    function parabola2target () {
      y = self.a * x * x + self.b * x + self.c
      translateX = x - self.x1
      translateY = self.y1 - y

      self.el.style.transform = 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)'

      x -= self.speed
      if (x > self.x2) {
        requestAnimationFrame(parabola2target)
      } else {
        if (self.onMotionDone) self.onMotionDone()
      }
    }
  }
}
