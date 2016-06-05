import angular from 'angular';

import rackNo from './rack-no';

export default angular.module('admin.helpers', [])
  .directive(...rackNo)
  .name;
