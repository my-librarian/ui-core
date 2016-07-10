import template from './input.html';

/*@ngInject*/
function authorInput(AuthorsSvc) {

  function link($scope) {

    AuthorsSvc.getAuthors()
      .then(authors => $scope.items = authors);
  }

  return {
    link,
    restrict: 'E',
    template,
    scope: {
      model: '='
    }
  };
}

export default [
  'authorInput',
  authorInput
];
