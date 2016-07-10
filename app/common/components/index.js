import angular from 'angular';

import AlertsSvc from './alerts/alerts-svc';
import LoaderSvc from './loader/loader-svc';
import alerts from './alerts/alerts';
import attribute from './attribute';
import authorInput from './typeahead/author-input';
import checkbox from './checkbox';
import compile from './compile';
import languageInput from './typeahead/language-input';
import loader from './loader/loader';
import radio from './radio';
import subjectInput from './typeahead/subject-input';

export default angular.module('common.components', [])
  .directive(...alerts)
  .directive(...attribute)
  .directive(...authorInput)
  .directive(...checkbox)
  .directive(...compile)
  .directive(...languageInput)
  .directive(...loader)
  .directive(...subjectInput)
  .directive(...radio)
  .service('AlertsSvc', AlertsSvc)
  .service('LoaderSvc', LoaderSvc)
  .name;
