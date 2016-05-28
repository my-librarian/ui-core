import template from './header-user-info.html';

import './header-user-info.less';

const headerUserInfo = {
  controller: 'HeaderUserInfoCtrl',
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'headerUserInfo',
  () => headerUserInfo
];
