import angular from 'angular';

import LanguageSvc from './language-svc';

export default angular.module('common.services', [])
  .service('LanguageSvc', LanguageSvc)
  .name;
