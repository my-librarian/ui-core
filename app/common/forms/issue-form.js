import template from './issue-form.html';

const issueForm = {
  restrict: 'E',
  template,
  scope: {
    onSuccess: '&'
  }
};

export default [
  'issueForm',
  () => issueForm
];
