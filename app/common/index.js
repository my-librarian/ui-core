import angular from 'angular';

import components from './components';
import filters from './filters';
import services from './services';

export default angular
  .module('common', [
    components,
    filters,
    services
  ])
  .name;
