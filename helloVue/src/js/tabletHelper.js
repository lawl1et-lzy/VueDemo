// import base from 'common/base.js'
// import appJSBridge from 'appJSBridge'
export default class tabletHelper {
  constructor () {
    this.appName = 'win-student'
  }

  // 开启交互
  openPenTouchPoint () {
    switch (this.appName) {
      case 'win-student':
        window.top.postMessage(JSON.stringify({data: 'homework:tablet:openPenTouchPoint'}), '*')
        break
      case 'ipad-student':

        break
    }
    return this
  }
  // 关闭交互
  closePenTouchPoint () {
    switch (this.appName) {
      case 'win-student':
        window.top.postMessage(JSON.stringify({data: 'homework:tablet:closePenTouchPoint'}), '*')
        break
      case 'ipad-student':

        break
    }
  }
  // 接受数据
  getMessage (fn) {
    switch (this.appName) {
      case 'win-student':
        window.addEventListener(
          'message',
          (e) => {
            fn(e.data)
          },
          false
        )
        break
      case 'ipad-student':

        break
    }
  }
  // 接收坐标点
  robotPenTouchPoint () {

  }
  // 手写板状态值
  robotPenLinkState () {

  }
}

// switch(this.appName) {
//   case 'win-student':

//     break;
//   case 'ipad-student':

//     break;
// }
