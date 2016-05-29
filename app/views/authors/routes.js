const authors = {
  parent: 'app',
  name: 'authors',
  url: '/authors',
  abstract: true,
  template: '<authors />'
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

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(authors)
    .state(authorsList)
    .state(authorDetails);

  $urlRouterProvider.when('/authors', '/authors/all');
}
