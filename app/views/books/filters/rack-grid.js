import template from './rack-grid.html';

import './rack-grid.less';

const rackGrid = {
  restrict: 'E',
  template,
  scope: {
    items: '=',
    onChange: '&'
  }
};

export default [
  'rackGrid',
  () => rackGrid
];
