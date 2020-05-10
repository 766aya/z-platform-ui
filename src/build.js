import ZButton from "./components/z-button/index"
import ZCard from "./components/z-card/index"
import ZControlBar from "./components/z-control-bar/index"
import ZDialog from "./components/z-dialog/index"

import { dateFormat, calcDate, getAge, getWeekDates } from "./util/date"
import { getStore, setStore, removeStore, getAllStore, clearStore } from "./util/store"

import filters from "./filters/index"

export const utils = {
  dateFormat,
  calcDate,
  getAge,
  getWeekDates,
  getStore,
  setStore,
  removeStore,
  getAllStore,
  clearStore,
}

const components = [
  ZButton,
  ZCard,
  ZControlBar,
  ZDialog
]

export function install(Vue, opts = {}) {
  Date.prototype.format = dateFormat
  Vue.prototype.dateFormat = dateFormat
  Vue.prototype.calcDate = calcDate
  Vue.prototype.getAge = getAge
  Vue.prototype.getWeekDates = getWeekDates
  
  // 注册通用过滤器
  for (let key in filters) {
    Vue.filter(key, filters[key])
  }
  // 注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component);
  })

}

export default {
  install,
  ZButton,
  ZCard,
  ZControlBar,
  ZDialog,
  ...utils
}
