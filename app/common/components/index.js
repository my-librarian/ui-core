import angular from 'angular';

import LoaderSvc from './loader-svc';
import attribute from './attribute';
import authorInput from './typeahead/author-input';
import checkbox from './checkbox';
import languageInput from './typeahead/language-input';
import loader from './loader';
import subjectInput from './typeahead/subject-input';

export default angular.module('common.components', [])
  .directive(...attribute)
  .directive(...authorInput)
  .directive(...checkbox)
  .directive(...languageInput)
  .directive(...loader)
  .directive(...subjectInput)
  .service('LoaderSvc', LoaderSvc)
  .name;
