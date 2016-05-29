import template from './subject.html';

const subject = {
  restrict: 'E',
  template,
  scope: {
    subject: '='
  }
};

export default [
  'subject',
  () => subject
];
