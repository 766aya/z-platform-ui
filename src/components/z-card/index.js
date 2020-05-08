import ZCard from './src/main';

ZCard.install = function (Vue) {
  Vue.component(ZCard.name, ZCard);
};

export default ZCard;
