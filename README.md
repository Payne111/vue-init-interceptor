# vue-init-interceptor

> 拦截vue组件实例化参数

## 使用

```js
import Vue from 'vue'

import VueInitInterceptor from 'vue-init-interceptor'

// 在组件中注入vuex store插件
import injectVueStorePlugin from 'inject-vue-store'

import store from './store'

new VueInitInterceptor(Vue, [
  injectVueStorePlugin(store)
])

```


