let MyPlugin = {}
MyPlugin.install = (Vue, options) => {
  Vue.prototype.$console = 'options'
}

module.exports = MyPlugin
