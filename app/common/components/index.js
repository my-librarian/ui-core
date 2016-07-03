import angular from 'angular';

import LoaderSvc from './loader/loader-svc';
import attribute from './attribute';
import authorInput from './typeahead/author-input';
import checkbox from './checkbox';
import languageInput from './typeahead/language-input';
import loader from './loader/loader';
import radio from './radio';
import subjectInput from './typeahead/subject-input';

export default angular.module('common.components', [])
  .directive(...attribute)
  .directive(...authorInput)
  .directive(...checkbox)
  .directive(...languageInput)
  .directive(...loader)
  .directive(...subjectInput)
  .directive(...radio)
  .service('LoaderSvc', LoaderSvc)
  .name;
