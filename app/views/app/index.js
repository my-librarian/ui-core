import angular from 'angular';

import app from './app';
import body from './body';
import header from './header';
import headerBanner from './header-banner';
import headerUserInfo from './header-user-info';
import headerUserInfoCtrl from './header-user-info-ctrl';
import routes from './routes';
import userInfoAttribute from './user-info-attribute';

export default angular.module('app', [])
  .config(routes)
  .directive(...app)
  .directive(...body)
  .directive(...header)
  .directive(...headerBanner)
  .directive(...headerUserInfo)
  .directive(...userInfoAttribute)
  .controller('HeaderUserInfoCtrl', headerUserInfoCtrl)
  .name;
