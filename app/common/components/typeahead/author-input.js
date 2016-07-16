import template from './input.html';
import controller from './input-ctrl';

/*@ngInject*/
function authorInput(AuthorsSvc) {

  function link($scope, $elem, $attr, vm) {

    AuthorsSvc.getAuthors()
      .then(authors => vm.items = authors);
  }

  return {
    bindToController: true,
    controller,
    controllerAs: 'vm',
    link,
    restrict: 'E',
    template,
    scope: {
      model: '=',
      exists: '='
    }
  };
}

export default [
  'authorInput',
  authorInput
];
