import template from './input.html';

function subjectInput(SubjectsSvc) {

  function link($scope) {

    SubjectsSvc.getSubjects()
      .then(subjects => $scope.items = subjects);
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
  'subjectInput',
  subjectInput
];