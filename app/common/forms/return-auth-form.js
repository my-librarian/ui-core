import controller from './return-auth-form-ctrl';
import template from './return-auth-form.html';

const returnAuthForm = {
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
  'returnAuthForm',
  () => returnAuthForm
];
