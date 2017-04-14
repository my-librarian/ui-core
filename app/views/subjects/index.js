import angular from 'angular';

import SubjectsSvc from './subjects-svc';
import subject from './subject';
import subjectDetails from './subject-details';
import subjectEdit from './subject-edit';
import subjects from './subjects';
import subjectsList from './subjects-list';

export default angular.module('subjects', [])
  .directive(...subject)
  .directive(...subjectDetails)
  .directive(...subjectEdit)
  .directive(...subjects)
  .directive(...subjectsList)
  .service('SubjectsSvc', SubjectsSvc)
  .name;
