import angular from 'angular';

import attribute from './attribute';
import authorInput from './author-input';
import checkbox from './checkbox';
import subjectInput from './subject-input';

export default angular.module('common.components', [])
  .directive(...attribute)
  .directive(...authorInput)
  .directive(...checkbox)
  .directive(...subjectInput)
  .name;
