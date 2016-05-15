import template from './header-banner.html';

import './header-banner.less';

const headerBanner = {
  restrict: 'E',
  template
};

export default [
  'headerBanner',
  () => headerBanner
];
