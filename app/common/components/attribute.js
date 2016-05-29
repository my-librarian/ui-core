import template from './attribute.html';

const attribute = {
  restrict: 'E',
  template,
  scope: {
    label: '@',
    value: '@',
    link: '@'
  }
};

export default [
  'attribute',
  () => attribute
];
