import angular from 'angular';

import alphabetic from './alphabetic';
import placeholder from './placeholder';
import utc from './utc';

export default angular.module('common.filters', [])
  .filter(...alphabetic)
  .filter(...placeholder)
  .filter(...utc)
  .name;
