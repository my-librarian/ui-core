import angular from 'angular';

import attribute from './attribute';

export default angular.module('common.components', [])
  .directive(...attribute)
  .name;
