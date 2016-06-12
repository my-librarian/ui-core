import controller from './author-edit-ctrl';
import template from './author-edit.html';

import './author-edit.less';

const authorEdit = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'authorEdit',
  () => authorEdit
];
