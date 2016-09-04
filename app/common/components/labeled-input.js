import template from './labeled-input.html';

const labeledInput = {
  replace: true,
  restrict: 'E',
  scope: {
    label: '@',
    classNames: '@'
  },
  template,
  transclude: true
};

export default [
  'labeledInput',
  () => labeledInput
];
