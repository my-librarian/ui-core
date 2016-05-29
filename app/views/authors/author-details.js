import controller from './author-details-ctrl';
import template from './author-details.html';

import './author-details.less';

const authorDetails = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'authorDetails',
  () => authorDetails
];
