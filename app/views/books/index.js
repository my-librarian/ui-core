import angular from 'angular';

import BooksSvc from './books-svc';
import UrlSvc from './url-svc';
import book from './book';
import bookDetails from './book-details';
import bookEdit from './book-edit';
import books from './books';
import booksList from './books-list';
import filters from './filters';

export default angular
  .module('books', [
    filters
  ])
  .directive(...book)
  .directive(...bookDetails)
  .directive(...bookEdit)
  .directive(...books)
  .directive(...booksList)
  .service('BooksSvc', BooksSvc)
  .service('UrlSvc', UrlSvc)
  .name;
