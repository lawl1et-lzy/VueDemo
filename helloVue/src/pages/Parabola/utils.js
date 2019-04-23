/* eslint-disable */
class Parabola {
  constructor (options) {
    this.x1 = options.origin.x // 起始点
    this.y1 = options.origin.y

    this.x2 = options.target.x // 目标点
    this.y2 = options.target.y

    this.speed = options.speed || 10 // 速率

    this.curvature = options.curvature || 1 // 曲率

    this.el = options.el // 小球的DOM

    this.onMotionDone = options.onMotionDone // 回调函数

    this.a = Math.pow(Math.sqrt(Math.abs(this.y1 - this.y2)), this.curvature) / 1000

    let t1 = this.y1 - this.a * this.x1 * this.x1
    let t2 = this.y2 - this.a * this.x2 * this.x2

    this.b = (t1 - t2) / (this.x1 - this.x2)
    this.c = t1 - this.b * this.x1

    console.log(this)
    console.log(`y = ${this.a}x² + ${this.b}x + ${this.c}`) // 抛物线方程
  }

  start () {
    let x = this.x1
    let y
    let translateX
    let translateY
    let throwToTarget = () => {
      y = this.a * x * x + this.b * x + this.c
      translateX = x - this.x1
      translateY = y - this.y1

      this.el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`

      x -= this.speed
      if (x > this.x2) {
        requestAnimationFrame(throwToTarget)
      } else {
        if (this.onMotionDone) this.onMotionDone()
      }
    }
    requestAnimationFrame(throwToTarget)
  }
  /**
   * @methods init 
   * @param originEvent 点击事件 event
   * @param originElem 点击事件元素
   * @param targetElem 目标事件元素
   */
  static init (originEvent, originElem, targetElem) {
    // 生成小球
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let ballStyle = ball.style
    ballStyle.width = '20px'
    ballStyle.height = '20px'
    ballStyle.position = 'fixed'
    ballStyle.top = `${originEvent.clientY - 10}px`
    ballStyle.left = `${originEvent.clientX - 10}px`
    ballStyle.backgroundColor = 'red'
    ballStyle.borderRadius = '50%'
    ballStyle.zIndex = '999'

    originElem.appendChild(ball)

    let parabola = new Parabola({
      el: ball,
      curvature: 0.5,
      speed: 16,
      origin: {
        x: originEvent.clientX,
        y: originEvent.clientY
      },
      target: {
        x: targetElem.offsetLeft + 30,
        y: targetElem.offsetTop + 20
      },
      onMotionDone () {
        ball.remove()
      }
    })
    parabola.start()
  }
}

export default Parabola
