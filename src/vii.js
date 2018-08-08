class Interceptor {
  constructor(Vue, teeth = []) {
    this.teeth = teeth
    this.processApp(Vue)
    this.processComponent(Vue)
  }

  processApp(Vue) {
    const teeth = this.teeth
    Vue.prototype.orgInit = Vue.prototype._init
    Vue.prototype._init = function (opt) {
      teeth.forEach(tooth => {
        tooth(opt)
      })
      this.orgInit(opt)
    }
  }

  processComponent(Vue) {
    const teeth = this.teeth
    Vue.orgExtend = Vue.extend
    Vue.extend = function (opt) {
      teeth.forEach(tooth => {
        tooth(opt)
      })
      return Vue.orgExtend(opt)
    }
  }
}

export default Interceptor