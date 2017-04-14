import angular from 'angular';

const authors = {
  parent: 'app',
  name: 'authors',
  url: '/authors',
  abstract: true,
  template: '<authors />',
  resolve: /*@ngInject*/($ocLazyLoad) => $ocLazyLoad.load([
    '/authors.js',
    '/authors.css'
  ])
};

const authorsList = {
  name: 'authors.list',
  url: '/list',
  template: '<authors-list />'
};

const authorDetails = {
  name: 'authors.details',
  url: '/:id/details',
  template: '<author-details />'
};

const authorEdit = {
  name: 'authors.edit',
  url: '/:id/edit',
  template: '<author-edit />'
};

/*@ngInject*/
function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(authors)
    .state(authorsList)
    .state(authorDetails)
    .state(authorEdit);

  $urlRouterProvider.when('/authors', '/authors/all');
}

export default angular.module('authors.routes', [])
  .config(routes)
  .name;
