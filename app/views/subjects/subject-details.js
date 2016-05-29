import controller from './subject-details-ctrl';
import template from './subject-details.html';

import './subject-details.less';

const subjectDetails = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'subjectDetails',
  () => subjectDetails
];
