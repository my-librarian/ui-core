import angular from 'angular';

import home from './home';

export default angular.module('home', [])
  .directive(...home)
  .name;
