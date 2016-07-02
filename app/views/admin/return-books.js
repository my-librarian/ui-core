import controller from './return-books-ctrl';
import template from './return-books.html';

const returnBooks = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'returnBooks',
  () => returnBooks
];
