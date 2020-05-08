import ZButton from './src/main';

ZButton.install = function (Vue) {
  Vue.component(ZButton.name, ZButton);
};

export default ZButton;
