import template from './checkbox.html';

import './checkbox.less';

const checkbox = {
  restrict: 'E',
  template,
  scope: {
    label: '@',
    model: '=',
    onChange: '&'
  }
};

export default [
  'checkbox',
  () => checkbox
];
