import controller from './create-subject-ctrl';
import template from './create-subject.html';

const createSubject = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'createSubject',
  () => createSubject
];
