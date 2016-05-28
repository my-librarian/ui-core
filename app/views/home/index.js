import angular from 'angular';

import home from './home';
import routes from './routes';

export default angular.module('home', [])
  .config(routes)
  .directive(...home)
  .name;
