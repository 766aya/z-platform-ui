import Vue from 'vue'
import App from './App.vue'
import ZUI from "./build"
import ElementUI from "element-ui"
import Avue from "@smallwei/avue"
import "element-ui/lib/theme-chalk/index.css"
import "./styles/index.scss"

Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(Avue)
Vue.use(ZUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
