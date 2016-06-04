import controller from './books-list-ctrl';
import template from './books-list.html';

import './books-list.less';

const booksList = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'booksList',
  () => booksList
];
