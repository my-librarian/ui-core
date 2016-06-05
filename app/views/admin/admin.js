import template from './admin.html';

import './admin.less';

const admin = {
  restrict: 'E',
  template
};

export default [
  'admin',
  () => admin
];
