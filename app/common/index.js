import angular from 'angular';

import components from './components';
import forms from './forms';
import filters from './filters';
import services from './services';

export default angular
  .module('common', [
    components,
    forms,
    filters,
    services
  ])
  .name;
