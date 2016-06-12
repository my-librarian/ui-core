import controller from './subject-edit-ctrl';
import template from './subject-edit.html';

import './subject-edit.less';

const subjectEdit = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'subjectEdit',
  () => subjectEdit
];
