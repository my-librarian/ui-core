import controller from './book-edit-ctrl';
import template from './book-edit.html';

import './book-edit.less';

const bookEdit = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'bookEdit',
  () => bookEdit
];
