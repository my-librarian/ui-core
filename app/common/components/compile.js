/*@ngInject*/
const compile = ($compile) => ({

  link($scope, $elem, $attr) {

    $scope.$watch(
      () => $scope.$eval($attr.compile),
      value => {
        $elem.html(value);
        $compile($elem.contents())($scope);
      }
    );

  },

  restrict: 'A'
});

export default ['compile', compile];
