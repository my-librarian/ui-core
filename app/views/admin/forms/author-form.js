import controller from './author-form-ctrl';
import template from './author-form.html';

const authorForm = {
  bindToController: true,
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template,
  scope: {
    author: '=?',
    onSubmit: '&',
    update: '@'
  }
};

export default [
  'authorForm',
  () => authorForm
];
