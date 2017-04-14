import angular from 'angular';

const subjects = {
  parent: 'app',
  name: 'subjects',
  url: '/subjects',
  abstract: true,
  template: '<subjects />',
  resolve: /*@ngInject*/($ocLazyLoad) => $ocLazyLoad.load([
    '/subjects.js',
    '/subjects.css'
  ])
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
function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(subjects)
    .state(subjectsList)
    .state(subjectDetails)
    .state(subjectEdit);

  $urlRouterProvider.when('/subjects', '/subjects/all');
}

export default angular.module('subjects.routes', [])
  .config(routes)
  .name;
