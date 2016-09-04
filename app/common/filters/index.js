import angular from 'angular';

import alphabetic from './alphabetic';
import placeholder from './placeholder';

export default angular.module('common.filters', [])
  .filter(...alphabetic)
  .filter(...placeholder)
  .name;
