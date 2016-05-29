import angular from 'angular';

import alphabetic from './alphabetic';

export default angular.module('common.filters', [])
  .filter(...alphabetic)
  .name;
