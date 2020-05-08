import ZDialog from './src/main';

ZDialog.install = function (Vue) {
  Vue.component(ZDialog.name, ZDialog);
}

export default ZDialog;
