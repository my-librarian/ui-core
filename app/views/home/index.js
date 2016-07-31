import angular from 'angular';

import home from './home';
import routes from './routes';

import './home.less';

export default angular.module('home', [])
  .config(routes)
  .directive(...home)
  .name;
