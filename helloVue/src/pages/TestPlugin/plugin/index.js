// alert.js
import Vue from 'vue'

// 具体的组件
import ToastCom from './toast.vue'
class Toast {
  constructor () {
    this.instance = null
  }
  init (opts) {
    // 子类
    const ToastComClass = Vue.extend(ToastCom)
    this.instance = new ToastComClass({
      el: document.createElement('div')
    })
    Object.assign(this.instance, opts)
    document.body.appendChild(this.instance.$el)
  }
}
const toasta = new Toast()
// 对外暴露的方法
const toast = (opts) => {
  return toasta.init(opts)
}

export {
  toast
}

// // alert.js
// import Vue from 'vue'

// // 具体的组件
// import Alert from './alert.vue'
// Alert.newInstance = properties => {
//   const props = properties || {}
//   // 实例化一个组件，然后挂载到body上
//   const Instance = new Vue({
//     render (h) {
//       return h(Alert, {
//         props: props
//       })
//     }
//   })
//   const component = Instance.$mount()
//   document.body.appendChild(component.$el)
//   // 通过闭包维护alert组件的引用
//   const alert = Instance.$children[0]
//   return {
//     // Alert组件对外暴露的两个方法
//     add (noticeProps) {
//       alert.add(noticeProps)
//     },
//     remove (name) {
//       alert.remove(name)
//     }
//   }
// }

// // 提示单例
// let messageInstance
// function getMessageInstance () {
//   messageInstance = messageInstance || Alert.newInstance({name: 'niya'})
//   return messageInstance
// }
// function notice ({ duration = 1.5, content = '' }) {
//   // 等待接口调用的时候再实例化组件，避免进入页面就直接挂载到body上
//   let instance = getMessageInstance()
//   instance.add({
//     content: content,
//     duration: duration
//   })
// }

// // 对外暴露的方法
// export default {
//   info (options) {
//     return notice(options)
//   }
// }
