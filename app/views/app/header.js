import template from './header.html';

import './header.less';

const appHeader = {
  restrict: 'E',
  template
};

export default [
  'appHeader',
  () => appHeader
];
