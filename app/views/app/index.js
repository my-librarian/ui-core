import angular from 'angular';

import body from './body';
import header from './header';
import headerBanner from './header-banner';

export default angular.module('app', [])
  .directive(...body)
  .directive(...header)
  .directive(...headerBanner)
  .name;
