import template from './header-banner.html';

import './header-banner.less';

/*@ngInject*/
function headerBanner(LoginSvc) {

  return headerBanner = {
    link($scope) {

      $scope.isModerator = () => LoginSvc.userLevel.isModerator;
    },
    restrict: 'E',
    template
  };
}

export default [
  'headerBanner',
  headerBanner
];
