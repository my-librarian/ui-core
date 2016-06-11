import template from './typeahead-input.html';

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
