import angular from 'angular';

import admin from './admin';
import createAuthor from './create-author';
import createBook from './create-book';
import createSubject from './create-subject';
import helpers from './helpers';
import returnBooks from './return-books';

export default angular
  .module('admin', [
    helpers
  ])
  .directive(...admin)
  .directive(...createAuthor)
  .directive(...createBook)
  .directive(...createSubject)
  .directive(...returnBooks)
  .name;
