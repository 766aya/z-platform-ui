import Vue from 'vue'
import App from './App.vue'
import ZUI from "./build"
import ElementUI from "element-ui"

import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(ZUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
