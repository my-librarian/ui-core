import controller from './book-details-ctrl';
import template from './book-details.html';

const bookDetails = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'bookDetails',
  () => bookDetails
];
