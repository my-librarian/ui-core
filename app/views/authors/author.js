import template from './author.html';

const author = {
  restrict: 'E',
  template,
  scope: {
    author: '='
  }
};

export default [
  'author',
  () => author
];
