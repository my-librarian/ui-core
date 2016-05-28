import template from './book.html';

const book = {
  restrict: 'E',
  template,
  scope: {
    book: '='
  }
};

export default [
  'book',
  () => book
];
