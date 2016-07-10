import template from './loader.html';

import './loader.less';

/*@ngInject*/
function loader(LoaderSvc) {

  function link($scope) {

    $scope.loading = LoaderSvc.loading;
  }

  return {
    restrict: 'E',
    link,
    template
  };
}

export default [
  'loader',
  loader
];
