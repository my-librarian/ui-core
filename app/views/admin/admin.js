import template from './admin.html';

import './admin.less';

/*@ngInject*/
function admin($state, LoginSvc, TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('Admin');

      if(!LoginSvc.userLevel.isAdmin) {
        $state.go('login');
      }
    },
    restrict: 'E',
    template
  };
}

export default [
  'admin',
  admin
];
