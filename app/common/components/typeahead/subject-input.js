import template from './input.html';
import controller from './input-ctrl';

/*@ngInject*/
function subjectInput(SubjectsSvc) {

  function link($scope, $elem, $attr, vm) {

    SubjectsSvc.getSubjects()
      .then(subjects => vm.items = subjects);
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
  'subjectInput',
  subjectInput
];
