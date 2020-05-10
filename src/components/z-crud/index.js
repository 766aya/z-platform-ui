import ZCrud from './src/main';

ZCrud.install = function (Vue) {
  Vue.component(ZCrud.name, ZCrud);
}

export default ZCrud;
