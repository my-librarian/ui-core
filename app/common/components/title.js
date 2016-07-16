/*@ngInject*/
function title(TitleSvc) {

  return {
    restrict: 'E',
    link($scope) {

      $scope.page = TitleSvc.page;
    },
    template: '{{page.title}}'
  };
}

export default [
  'title',
  title
];
