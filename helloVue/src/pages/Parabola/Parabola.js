
/* eslint-disable */
class Parabola {
  constructor (options) {
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
    var t1 = this.y1 - this.a * this.x1 * this.x1
    var t2 = this.y2 - this.a * this.x2 * this.x2
    this.b = (t1 - t2) / (this.x1 - this.x2)
    this.c = t1 - this.b * this.x1
    console.log(this)
    console.log(`y = ${this.a}x² + ${this.b}x + ${this.c}`) // 抛物线方程
  }

  start () {
    var self = this
    requestAnimationFrame(parabola2target)
    var x = self.x1
    var y, translateX, translateY
    function parabola2target () {
      y = self.a * x * x + self.b * x + self.c
      translateX = x - self.x1
      translateY = self.y1 - y

      self.el.style.transform = 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0)'

      x -= self.speed
      if (x > self.x2) {
        requestAnimationFrame(parabola2target)
      } else {
        if (self.onMotionDone) self.onMotionDone()
      }
    }
  }

  static init (event, cont, targetEle, vm) {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let ballStyle = ball.style;
    ballStyle.width = '20px';
    ballStyle.height = '20px';
    ballStyle.position = 'fixed';
    ballStyle.top = `${event.clientY - 10}px`;
    ballStyle.left = `${event.clientX - 10}px`;
    ballStyle.backgroundColor = 'red';
    ballStyle.borderRadius = '50%';
    ballStyle.zIndex = '999';
    cont.appendChild(ball)
    // let that = vm
    let parabola = new Parabola({
      el: ball,
      curvature: 0.5,
      direction: 'down',
      speed: 15,
      origin: {
        x: event.clientX - 8,
        y: event.clientY - 8
      },
      target: {
        x: targetEle.offsetLeft + 30,
        y: targetEle.offsetTop + 20
      },
      onMotionDone: function () {
        ball.remove()
        // that.$store.commit('changeOpen', false)
      }
    })
    parabola.start()
  }
}

export default Parabola
