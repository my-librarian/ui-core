import template from './radio.html';

import './radio.less';

const radio = {
  restrict: 'E',
  scope: {
    label: '@',
    model: '=',
    onChange: '&',
    required: '=?',
    value: '@'
  },
  template
};

export default [
  'radio',
  () => radio
];
