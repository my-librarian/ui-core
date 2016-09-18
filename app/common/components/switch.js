import template from './switch.html';

import './switch.less';

const switchDirective = {
  restrict: 'E',
  template,
  scope: {
    model: '=',
    onChange: '&'
  }
};

export default [
  'switch',
  () => switchDirective
];
