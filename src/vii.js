class Interceptor {
  constructor(Vue, plugins = []) {
    this.plugins = plugins
    this.processApp(Vue)
    this.processComponent(Vue)
  }

  processApp(Vue) {
    const plugins = this.plugins
    Vue.prototype.orgInit = Vue.prototype._init
    Vue.prototype._init = function (opt) {
      plugins.forEach(plugin => {
        plugin(opt)
      })
      this.orgInit(opt)
    }
  }

  processComponent(Vue) {
    const plugins = this.plugins
    Vue.orgExtend = Vue.extend
    Vue.extend = function (opt) {
      plugins.forEach(plugin => {
        plugin(opt)
      })
      return Vue.orgExtend(opt)
    }
  }
}

export default Interceptor