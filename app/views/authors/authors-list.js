import controller from './authors-list-ctrl';
import template from './authors-list.html';

import './authors-list.less';

const authorsList = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'authorsList',
  () => authorsList
];
