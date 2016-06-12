import controller from './book-form-ctrl';
import template from './book-form.html';

const bookForm = {
  bindToController: true,
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template,
  scope: {
    book: '=',
    onSubmit: '&',
    update: '@'
  }
};

export default [
  'bookForm',
  () => bookForm
];
