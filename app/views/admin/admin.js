import template from './admin.html';

import './admin.less';

/*@ngInject*/
function admin($state, LoginSvc, TitleSvc) {

  return {
    link($scope) {
      TitleSvc.setTitle('Admin');

      if (!LoginSvc.userLevel.isModerator) {
        $state.go('login');
      }

      const destroyWatch = $scope.$watch(
        () => LoginSvc.user.details.userid,
        newValue => {
          if (newValue === undefined) {
            $state.go('home');
          }
        }
      );

      $scope.$on('$destroy', destroyWatch);

    },
    restrict: 'E',
    template
  };
}

export default [
  'admin',
  admin
];
