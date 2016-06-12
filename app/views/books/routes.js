const books = {
  parent: 'app',
  name: 'books',
  url: '/books',
  abstract: true,
  template: '<books />'
};

const booksList = {
  name: 'books.list',
  url: '/list',
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

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(books)
    .state(booksList)
    .state(bookDetails)
    .state(bookEdit);

  $urlRouterProvider.when('/books', '/books/all');
}
