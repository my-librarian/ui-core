const books = {
  parent: 'app',
  name: 'books',
  url: '/books',
  abstract: true,
  template: '<books />'
};

const booksList = {
  name: 'books.list',
  url: '/list?a&b&l&q&r&s',
  template: '<books-list />'
};

const bookDetails = {
  name: 'books.details',
  url: '/:id/details',
  template: '<book-details />'
};

const bookEdit = {
  name: 'books.edit',
  url: '/:id/edit',
  template: '<book-edit />'
};

/*@ngInject*/
export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(books)
    .state(booksList)
    .state(bookDetails)
    .state(bookEdit);

  $urlRouterProvider.when('/books', '/books/all');
}
