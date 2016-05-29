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

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(subjects)
    .state(subjectsList)
    .state(subjectDetails);

  $urlRouterProvider.when('/subjects', '/subjects/all');
}
