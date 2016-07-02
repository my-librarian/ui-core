import template from './availability.html';

import './availability.less';

const availability = {
  restrict: 'E',
  template,
  scope: {
    availability: '=',
    onChange: '&'
  }
};

export default [
  'availability',
  () => availability
];
