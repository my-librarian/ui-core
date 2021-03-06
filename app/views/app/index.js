import angular from 'angular';

import app from './app';
import body from './body';
import buildBreadcrumbs from './breadcrumbs';
import header from './header';
import headerBanner from './header-banner';
import headerUserInfo from './header-user-info';
import headerUserInfoCtrl from './header-user-info-ctrl';
import interceptor from './interceptor';
import routes from './routes';
import translation from './translation';
import userInfoAttribute from './user-info-attribute';

export default angular.module('app', [])
  .config(interceptor)
  .config(routes)
  .config(translation)
  .run(buildBreadcrumbs)
  .directive(...app)
  .directive(...body)
  .directive(...header)
  .directive(...headerBanner)
  .directive(...headerUserInfo)
  .directive(...userInfoAttribute)
  .controller('HeaderUserInfoCtrl', headerUserInfoCtrl)
  .name;
