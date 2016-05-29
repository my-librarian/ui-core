import angular from 'angular';

import SubjectsSvc from './subjects-svc';
import subject from './subject';
import subjectDetails from './subject-details';
import subjects from './subjects';
import subjectsList from './subjects-list';
import routes from './routes';

export default angular.module('subjects', [])
  .config(routes)
  .directive(...subject)
  .directive(...subjectDetails)
  .directive(...subjects)
  .directive(...subjectsList)
  .service('SubjectsSvc', SubjectsSvc)
  .name;
