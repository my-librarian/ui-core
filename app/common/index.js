import angular from 'angular';

import components from './components';
import dialogs from './dialogs';
import forms from './forms';
import filters from './filters';
import services from './services';

export default angular
  .module('common', [
    components,
    dialogs,
    forms,
    filters,
    services
  ])
  .name;
