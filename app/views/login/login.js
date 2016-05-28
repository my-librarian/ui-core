import controller from './login-ctrl';
import template from './login.html';

import './login.less';

const login = {
  restrict: 'E',
  controllerAs: 'vm',
  controller,
  template
};

export default [
  'login',
  () => login
];
