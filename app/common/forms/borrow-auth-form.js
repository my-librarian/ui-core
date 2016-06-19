import controller from './borrow-auth-form-ctrl';
import template from './borrow-auth-form.html';

const borrowAuthForm = {
  bindToController: true,
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template,
  scope: {
    onSuccess: '&'
  }
};

export default [
  'borrowAuthForm',
  () => borrowAuthForm
];
