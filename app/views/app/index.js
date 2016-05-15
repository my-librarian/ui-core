import angular from 'angular';

import header from './header';
import headerBanner from './header-banner';

export default angular.module('app', [])
  .directive(...header)
  .directive(...headerBanner)
  .name;
