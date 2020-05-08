import ZCard from "./components/z-card/index"
import ZDialog from "./components/z-dialog/index"
import { dateFormat, calcDate, getAge } from "./util/date"
import { getStore, setStore, removeStore, getAllStore, clearStore } from "./util/store"

export const utils = {
  dateFormat,
  calcDate,
  getAge,
  getStore,
  setStore,
  removeStore,
  getAllStore,
  clearStore,
}

const components = [
  ZCard,
  ZDialog
]

export function install(Vue, opts = {}) {
  Date.prototype.format = dateFormat
  Vue.prototype.dateFormat = dateFormat
  Vue.prototype.calcDate = calcDate
  Vue.prototype.getAge = getAge

  components.forEach(component => {
    Vue.component(component.name, component);
  })

}

export default {
  install,
  ZCard,
  ZDialog,
  ...utils
}
