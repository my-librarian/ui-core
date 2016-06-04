import template from './availability.html';

import './availability.less';

const availability = {
  restrict: 'E',
  template,
  scope: {
    available: '=',
    borrowed: '=',
    onChange: '&'
  }
};

export default [
  'availability',
  () => availability
];
