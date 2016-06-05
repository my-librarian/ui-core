import controller from './create-book-ctrl';
import template from './create-book.html';

const createBook = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'createBook',
  () => createBook
];
