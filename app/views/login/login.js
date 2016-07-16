import controller from './login-ctrl';
import template from './login.html';

import './login.less';

/*@ngInject*/
function login(TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('Login');
    },
    restrict: 'E',
    controllerAs: 'vm',
    controller,
    template
  };
}

export default [
  'login',
  login
];
