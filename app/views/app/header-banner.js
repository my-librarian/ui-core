import template from './header-banner.html';

import './header-banner.less';

/*@ngInject*/
function headerBanner(LoginSvc) {

  return headerBanner = {
    link($scope) {

      $scope.isAdmin = () => LoginSvc.userLevel.isAdmin;
    },
    restrict: 'E',
    template
  };
}

export default [
  'headerBanner',
  headerBanner
];
