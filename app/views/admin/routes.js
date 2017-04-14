import angular from 'angular';

const admin = {
  parent: 'app',
  name: 'admin',
  url: '/admin',
  template: '<admin/>',
  resolve: /*@ngInject*/($ocLazyLoad) => $ocLazyLoad.load([
    '/admin.js',
    '/admin.css'
  ])
};

const adminCreateAuthor = {
  name: 'admin.createAuthor',
  url: '/createAuthor',
  template: '<create-author/>'
};

const adminCreateBook = {
  name: 'admin.createBook',
  url: '/createBook',
  template: '<create-book/>'
};

const adminCreateSubject = {
  name: 'admin.createSubject',
  url: '/createSubject',
  template: '<create-subject/>'
};

const adminReturnBooks = {
  name: 'admin.returnBooks',
  url: '/returnBooks',
  template: '<return-books/>'
};

/*@ngInject*/
function routes($stateProvider) {

  $stateProvider
    .state(admin)
    .state(adminCreateAuthor)
    .state(adminCreateBook)
    .state(adminCreateSubject)
    .state(adminReturnBooks);
}

export default angular.module('admin.routes', [])
  .config(routes)
  .name;
