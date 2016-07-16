import template from './admin.html';

import './admin.less';

/*@ngInject*/
function admin(TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('Admin');
    },
    restrict: 'E',
    template
  };
}

export default [
  'admin',
  admin
];
