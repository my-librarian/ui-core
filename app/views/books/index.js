import angular from 'angular';

import BooksSvc from './books-svc';
import book from './book';
import bookDetails from './book-details';
import books from './books';
import booksList from './books-list';
import routes from './routes';

export default angular.module('books', [])
  .config(routes)
  .directive(...book)
  .directive(...bookDetails)
  .directive(...books)
  .directive(...booksList)
  .service('BooksSvc', BooksSvc)
  .name;
