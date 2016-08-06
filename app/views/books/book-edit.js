import controller from './book-edit-ctrl';
import template from './book-edit.html';

import './book-edit.less';

/*@ngInject*/
function bookEdit($state, LoginSvc) {

  return {
    link() {

      if (!LoginSvc.userLevel.isModerator) {
        $state.go('login');
      }
    },
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    template
  };
}

export default [
  'bookEdit',
  bookEdit
];
