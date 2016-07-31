import template from './book.html';

const book = {
  restrict: 'E',
  template,
  scope: {
    book: '=',
    showDetails: '@'
  }
};

export default [
  'book',
  () => book
];
