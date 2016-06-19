import template from './radio.html';

import './radio.less';

const radio = {
  restrict: 'E',
  scope: {
    model: '=',
    label: '@',
    value: '@',
    required: '=?'
  },
  template
};

export default [
  'radio',
  () => radio
];
