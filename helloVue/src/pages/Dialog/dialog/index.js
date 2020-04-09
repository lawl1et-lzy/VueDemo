import Vue from 'vue'
import dialog from './dialog.vue'
// 1. 构建子类
const DialogConstructor = Vue.extend(dialog)
// let dalogPool = []

// 3. 创建实例
const getAnInstance = () => {
  // if (dalogPool.length > 0) {
  //   let instance = dalogPool[0];
  //   dalogPool.splice(0, 1);
  //   return instance;
  // }
  return new DialogConstructor({
    el: document.createElement('div')
  })
}

// const returnAnInstance = (instance) => {
//   if (instance) {
//     dalogPool.push(instance)
//   }
// }

const removeDom = () => {
  const DOM = document.querySelector('.ui-dialog')
  if (DOM) {
    DOM.parentNode.removeChild(DOM)
  }
}

// 2. 子类的原型上实现一些关闭确认的方法
DialogConstructor.prototype.close = function () {
  this.show = false
  // returnAnInstance(this)
  removeDom()
}

/*
  options:
  @param String title 标题
  @param String subtitle 副标题 || subtitleHtml 副标题HTML
  @param Function confirm 可选 右侧按钮回调函数
  @param String confirmText 可选 右侧按钮文本
  @param Number confirmPhone 可选 右侧按钮拨打的电话
  @param Function cancel 可选 左侧按钮回调函数
  @param String concelText 可选 左侧按钮文本
*/
let Dialog = (options = {}) => {
  const INSTANCE = Object.assign(getAnInstance(), options, { show: true })

  // 标题与副标题至少有一个
  if (!options.title && !options.subtitle && !options.subtitleHtml) {
    console.warn('Dialog 组件: 缺少 title / subtitle / subtitleHtml 属性')
  }

  // 副标题:文本或HTML
  if (!!options.subtitle && !!options.subtitleHtml) {
    console.warn('Dialog 组件: subtitle / subtitleHtml 属性重复')
  }
  // 4. 挂在到 DOM 上
  document.body.appendChild(INSTANCE.$el)
  return INSTANCE
}

export default Dialog
