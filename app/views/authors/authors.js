import './authors.less';

const authors = {
  restrict: 'E',
  template: '<ui-view />'
};

export default [
  'authors',
  () => authors
];
