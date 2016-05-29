import angular from 'angular';

import components from './components';
import filters from './filters';

export default angular
  .module('common', [
    components,
    filters
  ])
  .name;
