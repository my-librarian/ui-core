import controller from './subject-form-ctrl';
import template from './subject-form.html';

const subjectForm = {
  bindToController: true,
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template,
  scope: {
    onSubmit: '&',
    subject: '=',
    update: '@'
  }
};

export default [
  'subjectForm',
  () => subjectForm
];
