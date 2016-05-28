import angular from 'angular';

import app from './app';
import body from './body';
import header from './header';
import headerBanner from './header-banner';
import routes from './routes';

export default angular.module('app', [])
  .config(routes)
  .directive(...app)
  .directive(...body)
  .directive(...header)
  .directive(...headerBanner)
  .name;
