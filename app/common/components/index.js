import angular from 'angular';

import attribute from './attribute';
import checkbox from './checkbox';

export default angular.module('common.components', [])
  .directive(...attribute)
  .directive(...checkbox)
  .name;
