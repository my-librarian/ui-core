const subjects = {
  parent: 'app',
  name: 'subjects',
  url: '/subjects',
  abstract: true,
  template: '<subjects />'
};

const subjectsList = {
  name: 'subjects.list',
  url: '/list',
  template: '<subjects-list />'
};

const subjectDetails = {
  name: 'subjects.details',
  url: '/:id/details',
  template: '<subject-details />'
};

const subjectEdit = {
  name: 'subjects.edit',
  url: '/:id/edit',
  template: '<subject-edit/>'
};

/*@ngInject*/
export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(subjects)
    .state(subjectsList)
    .state(subjectDetails)
    .state(subjectEdit);

  $urlRouterProvider.when('/subjects', '/subjects/all');
}
