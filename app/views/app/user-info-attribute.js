import template from './user-info-attribute.html';

const userInfoAttribute = {
  restrict: 'A',
  template,
  scope: {
    icon: '@',
    label: '@'
  }
};

export default [
  'userInfoAttribute',
  () => userInfoAttribute
];
