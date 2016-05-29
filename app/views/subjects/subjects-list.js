import controller from './subjects-list-ctrl';
import template from './subjects-list.html';

import './subjects-list.less';

const subjectsList = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'subjectsList',
  () => subjectsList
];
