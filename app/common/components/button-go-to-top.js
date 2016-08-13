import angular from 'angular';
import template from './button-go-to-top.html';

import './button-go-to-top.less';

/*@ngInject*/
function buttonGoToTop($window) {

  return {
    link($scope) {

      const scrollLimit = 2000;

      $scope.goToTop = () => $window.scrollTo(0, 0);

      angular.element($window).on('scroll', () => {
        $scope.visible = $window.scrollY > scrollLimit;
        $scope.$digest();
      });
    },
    restrict: 'E',
    template
  };
}

export default [
  'buttonGoToTop',
  buttonGoToTop
];
